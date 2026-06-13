import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CacheHelper } from '../redis/cache.helper'
import { ProductFiltersDto } from './dto/product-filters.dto'

const PRODUCT_CACHE_TTL = 60 * 10  // 10 minutes

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private cache: CacheHelper,
  ) {}

  async getProducts(filters: ProductFiltersDto) {
    const {
      category,
      make,
      model,
      priceMin,
      priceMax,
      limit = 20,
      offset = 0,
    } = filters

    const where: any = { isActive: true }

    if (category) {
      const cat = await this.prisma.category.findUnique({ where: { slug: category } })
      if (cat) where.categoryId = cat.id
    }

    if (priceMin !== undefined) where.basePrice = { ...where.basePrice, gte: priceMin }
    if (priceMax !== undefined) where.basePrice = { ...where.basePrice, lte: priceMax }

    let products = await this.prisma.product.findMany({
      where,
      include: { category: true, variants: true },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    })

    // Compatibility filter — done in-memory on the JSONB field
    if (make || model) {
      products = products.filter((p) => {
        const rules: any[] = p.compatibility as any[]
        if (!rules?.length) return true
        return rules.some((r) => {
          const makeMatch = !make || r.make.toLowerCase() === make.toLowerCase()
          const modelMatch = !model || r.model.toLowerCase() === model.toLowerCase()
          return makeMatch && modelMatch
        })
      })
    }

    const total = await this.prisma.product.count({ where })
    return { products, total, limit, offset }
  }

  async getBySlug(slug: string, vehicleVrn?: string) {
    const cacheKey = `product:${slug}`
    const product = await this.cache.getOrSet(
      cacheKey,
      PRODUCT_CACHE_TTL,
      () => this.prisma.product.findUnique({
        where: { slug },
        include: { category: true, variants: true },
      }),
    )

    if (!product) throw new NotFoundException('Product not found')

    let compatibilityStatus: 'compatible' | 'incompatible' | 'unknown' = 'unknown'

    if (vehicleVrn) {
      const vehicle = await this.prisma.vehicle.findFirst({
        where: { vrn: vehicleVrn, isActive: true },
      })
      if (vehicle) {
        const rules: any[] = (product as any).compatibility ?? []
        if (!rules.length) {
          compatibilityStatus = 'unknown'
        } else {
          const fits = rules.some((r) => {
            const makeMatch = r.make.toLowerCase() === vehicle.make.toLowerCase()
            const modelMatch = r.model.toLowerCase() === vehicle.model.toLowerCase()
            const yearMatch = vehicle.year >= r.yearFrom && vehicle.year <= r.yearTo
            return makeMatch && modelMatch && yearMatch
          })
          compatibilityStatus = fits ? 'compatible' : 'incompatible'
        }
      }
    }

    return { ...product, compatibilityStatus }
  }

  async getFeatured(limit = 8) {
    return this.prisma.product.findMany({
      where: { isActive: true },
      include: { category: true },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })
  }
}