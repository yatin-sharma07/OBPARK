import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AuditService } from './audit.service'
import { CacheHelper } from '../redis/cache.helper'

export interface CreateProductDto {
  name: string
  slug: string
  description?: string
  categoryId: string
  basePrice: number
  sku: string
  stock: number
  images?: string[]
  compatibility?: any[]
}

@Injectable()
export class AdminProductService {
  constructor(
    private prisma: PrismaService,
    private audit: AuditService,
    private cache: CacheHelper,
  ) {}

  async listProducts(filters: {
    search?: string
    categoryId?: string
    isActive?: boolean
    limit?: number
    offset?: number
  }) {
    const { search, categoryId, isActive, limit = 20, offset = 0 } = filters
    const where: any = {}
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { sku: { contains: search, mode: 'insensitive' } },
      ]
    }
    if (categoryId) where.categoryId = categoryId
    if (isActive !== undefined) where.isActive = isActive

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include: { category: true },
        orderBy: { createdAt: 'desc' },
        take: Number(limit),
        skip: Number(offset),
      }),
      this.prisma.product.count({ where }),
    ])

    return { products, total, limit, offset }
  }

  async createProduct(userId: string, dto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: {
        ...dto,
        images: dto.images ?? [],
        compatibility: dto.compatibility ?? [],
      },
      include: { category: true },
    })
    await this.audit.log(userId, 'product.create', 'Product', product.id, { name: product.name })
    await this.cache.del(`product:${product.slug}`)
    return product
  }

  async updateProduct(userId: string, productId: string, dto: Partial<CreateProductDto>) {
    const existing = await this.prisma.product.findUnique({ where: { id: productId } })
    if (!existing) throw new NotFoundException('Product not found')

    const product = await this.prisma.product.update({
      where: { id: productId },
      data: dto,
      include: { category: true },
    })
    await this.audit.log(userId, 'product.update', 'Product', productId, dto)
    await this.cache.del(`product:${product.slug}`)
    return product
  }

  async archiveProduct(userId: string, productId: string) {
    const product = await this.prisma.product.update({
      where: { id: productId },
      data: { isActive: false },
    })
    await this.audit.log(userId, 'product.archive', 'Product', productId)
    await this.cache.del(`product:${product.slug}`)
    return { success: true }
  }
}