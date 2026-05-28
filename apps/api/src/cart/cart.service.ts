import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AddToCartDto } from './dto/cart.dto'

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  private async getOrCreateCart(userId: string) {
    const existing = await this.prisma.cart.findUnique({
      where: { userId },
    })

    if (existing) return existing

    return this.prisma.cart.create({
      data: { userId },
    })
  }

  async getCart(userId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              include: { category: true },
            },
            vehicle: true,
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    if (!cart) {
  return {
    id: null,
    items: [] as any[],
    subtotal: 0,
    itemCount: 0,
  }
}

    const items = cart.items.map((item) => ({
      ...item,
      compatibilityStatus: this.checkCompatibility(
        item.product.compatibility as any[],
        item.vehicle,
      ),
    }))

    const subtotal = items.reduce(
      (sum, item) =>
        sum + Number(item.product.basePrice) * item.quantity,
      0,
    )

    return {
      id: cart.id,
      items,
      subtotal,
      itemCount: items.reduce(
        (sum, item) => sum + item.quantity,
        0,
      ),
    }
  }

  async addItem(userId: string, dto: AddToCartDto) {
    const product = await this.prisma.product.findUnique({
      where: { id: dto.productId },
    })

    if (!product)
      throw new NotFoundException('Product not found')

    if (!product.isActive)
      throw new BadRequestException(
        'Product is no longer available',
      )

    if (product.stock < dto.quantity) {
      throw new BadRequestException(
        `Only ${product.stock} units available`,
      )
    }

    if (dto.vehicleId) {
      const vehicle = await this.prisma.vehicle.findFirst({
        where: {
          id: dto.vehicleId,
          userId,
          isActive: true,
        },
      })

      if (!vehicle)
        throw new NotFoundException(
          'Vehicle not found on your account',
        )
    }

    const cart = await this.getOrCreateCart(userId)

    const existing = await this.prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: dto.productId,
        vehicleId: dto.vehicleId ?? null,
      },
    })

    if (existing) {
      return this.prisma.cartItem.update({
        where: { id: existing.id },
        data: {
          quantity: existing.quantity + dto.quantity,
        },
        include: {
          product: {
            include: { category: true },
          },
          vehicle: true,
        },
      })
    }

    return this.prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: dto.productId,
        vehicleId: dto.vehicleId ?? null,
        quantity: dto.quantity,
      },
      include: {
        product: {
          include: { category: true },
        },
        vehicle: true,
      },
    })
  }

  async updateItem(
    userId: string,
    itemId: string,
    quantity: number,
  ) {
    await this.getCartItemForUser(userId, itemId)

    if (quantity === 0) {
      await this.prisma.cartItem.delete({
        where: { id: itemId },
      })

      return { deleted: true }
    }

    return this.prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
      include: {
        product: {
          include: { category: true },
        },
        vehicle: true,
      },
    })
  }

  async removeItem(
    userId: string,
    itemId: string,
  ) {
    await this.getCartItemForUser(userId, itemId)

    await this.prisma.cartItem.delete({
      where: { id: itemId },
    })

    return { success: true }
  }

  async linkVehicle(
    userId: string,
    itemId: string,
    vehicleId: string | null,
  ) {
    await this.getCartItemForUser(userId, itemId)

    if (vehicleId) {
      const vehicle =
        await this.prisma.vehicle.findFirst({
          where: {
            id: vehicleId,
            userId,
            isActive: true,
          },
        })

      if (!vehicle)
        throw new NotFoundException(
          'Vehicle not found',
        )
    }

    return this.prisma.cartItem.update({
      where: { id: itemId },
      data: { vehicleId },
      include: {
        product: {
          include: { category: true },
        },
        vehicle: true,
      },
    })
  }

  async clearCart(userId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
    })

    if (!cart) return { success: true }

    await this.prisma.cartItem.deleteMany({
      where: { cartId: cart.id },
    })

    return { success: true }
  }

  private async getCartItemForUser(
    userId: string,
    itemId: string,
  ) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
    })

    if (!cart)
      throw new NotFoundException('Cart not found')

    const item = await this.prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cartId: cart.id,
      },
    })

    if (!item)
      throw new NotFoundException(
        'Cart item not found',
      )

    return item
  }

  private checkCompatibility(
    rules: {
      make: string
      model: string
      yearFrom: number
      yearTo: number
    }[],
    vehicle: {
      make: string
      model: string
      year: number
    } | null,
  ): 'compatible' | 'incompatible' | 'unknown' {
    if (!vehicle || !rules?.length)
      return 'unknown'

    const fits = rules.some(
      (r) =>
        r.make.toLowerCase() ===
          vehicle.make.toLowerCase() &&
        r.model.toLowerCase() ===
          vehicle.model.toLowerCase() &&
        vehicle.year >= r.yearFrom &&
        vehicle.year <= r.yearTo,
    )

    return fits
      ? 'compatible'
      : 'incompatible'
  }
}