import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { RazorpayClient } from '../payment/razorpay.client'
import { CartService } from '../cart/cart.service'
import { CouponService } from '../coupon/coupon.service'
import { CreateOrderDto, SaveAddressDto } from './dto/order.dto'
import { randomUUID } from 'crypto'

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private razorpay: RazorpayClient,
    private cartService: CartService,
    private couponService: CouponService,
  ) {}

  async getAddresses(userId: string) {
    return this.prisma.address.findMany({
      where: { userId },
      orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
    })
  }

  async saveAddress(userId: string, dto: SaveAddressDto) {
    if (dto.isDefault) {
      await this.prisma.address.updateMany({
        where: { userId },
        data: { isDefault: false },
      })
    }
    return this.prisma.address.create({ data: { userId, ...dto } })
  }

  async createOrder(userId: string, dto: CreateOrderDto) {
    if (!dto.savedAddressId && !dto.oneTimeAddress) {
      throw new BadRequestException('Provide either a saved address or a one-time address')
    }

    const cart = await this.cartService.getCart(userId)
    if (!cart.items?.length) {
      throw new BadRequestException('Your cart is empty')
    }

    let addressId: string

    if (dto.savedAddressId) {
      const address = await this.prisma.address.findFirst({
        where: { id: dto.savedAddressId, userId },
      })
      if (!address) throw new NotFoundException('Address not found')
      addressId = address.id
    } else {
      const address = await this.prisma.address.create({
        data: { userId, label: 'One-time', ...dto.oneTimeAddress! },
      })
      addressId = address.id
    }

    const subtotal = (cart.items as any[]).reduce(
      (sum: number, item: any) =>
        sum + Number(item.product.basePrice) * Number(item.quantity),
      0,
    )

    let discount = 0
    let validatedCoupon: string | undefined

    if (dto.couponCode) {
      const result = await this.couponService.validateCoupon(dto.couponCode, subtotal)
      discount = result.discount
      validatedCoupon = dto.couponCode.toUpperCase()
    }

    const total = subtotal - discount
    const idempotencyKey = randomUUID()

    const razorpayOrder = await this.razorpay.createOrder(total, `ord_${Date.now()}`)

    const order = await this.prisma.order.create({
      data: {
        userId,
        addressId,
        subtotal,
        discount,
        total,
        couponCode: validatedCoupon,
        notes: dto.notes,
        status: 'PENDING',
        payment: {
          create: {
            razorpayOrderId: razorpayOrder.id,
            amount: total,
            status: 'PENDING',
            idempotencyKey,
          },
        },
        items: {
          create: cart.items.map((item: any) => ({
            productId: item.product.id,
            productName: item.product.name,
            productSku: item.product.sku,
            unitPrice: item.product.basePrice,
            quantity: item.quantity,
            total: Number(item.product.basePrice) * item.quantity,
          })),
        },
      },
      include: { items: true, payment: true, address: true },
    })

    return {
      order,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      ...(razorpayOrder.id.startsWith('mock_') && {
        mockPaymentId: `mock_pay_${Date.now()}`,
      }),
    }
  }

  async confirmPayment(userId: string, razorpayOrderId: string, razorpayPaymentId: string) {
    const payment = await this.prisma.payment.findUnique({
      where: { razorpayOrderId },
      include: { order: true },
    })

    if (!payment) throw new NotFoundException('Payment not found')
    if (payment.status === 'CAPTURED') return { alreadyProcessed: true }

    await this.prisma.payment.update({
      where: { razorpayOrderId },
      data: { status: 'CAPTURED', razorpayPaymentId },
    })

    await this.prisma.order.update({
      where: { id: payment.orderId },
      data: { status: 'CONFIRMED' },
    })

    if (payment.order.couponCode) {
      await this.couponService.incrementUsage(payment.order.couponCode)
    }

    await this.cartService.clearCart(userId)

    return { success: true, orderId: payment.orderId }
  }

  async getOrders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: { items: true, payment: true, address: true },
      orderBy: { createdAt: 'desc' },
    })
  }

  async getOrder(userId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, userId },
      include: { items: true, payment: true, address: true },
    })
    if (!order) throw new NotFoundException('Order not found')
    return order
  }
}