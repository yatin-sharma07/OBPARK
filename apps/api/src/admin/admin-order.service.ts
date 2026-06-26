import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AuditService } from './audit.service'

const VALID_TRANSITIONS: Record<string, string[]> = {
  PENDING:    ['CONFIRMED', 'CANCELLED'],
  CONFIRMED:  ['PROCESSING', 'CANCELLED'],
  PROCESSING: ['SHIPPED', 'CANCELLED'],
  SHIPPED:    ['DELIVERED'],
  DELIVERED:  [],
  CANCELLED:  ['REFUNDED'],
  REFUNDED:   [],
}

@Injectable()
export class AdminOrderService {
  constructor(
    private prisma: PrismaService,
    private audit: AuditService,
  ) {}

  async listOrders(filters: {
    status?: string
    userId?: string
    limit?: number
    offset?: number
  }) {
    const { status, userId, limit = 20, offset = 0 } = filters
    const where: any = {}
    if (status) where.status = status
    if (userId) where.userId = userId

    const [orders, total] = await Promise.all([
      this.prisma.order.findMany({
        where,
        include: {
          items: true,
          payment: true,
          address: true,
          user: { select: { id: true, name: true, email: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: Number(limit),
        skip: Number(offset),
      }),
      this.prisma.order.count({ where }),
    ])

    return { orders, total, limit, offset }
  }

  async getOrder(orderId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        items: true,
        payment: true,
        address: true,
        user: { select: { id: true, name: true, email: true } },
      },
    })
    if (!order) throw new NotFoundException('Order not found')
    return order
  }

  async updateStatus(adminId: string, orderId: string, newStatus: string) {
    const order = await this.prisma.order.findUnique({ where: { id: orderId } })
    if (!order) throw new NotFoundException('Order not found')

    const allowed = VALID_TRANSITIONS[order.status] ?? []
    if (!allowed.includes(newStatus)) {
      throw new BadRequestException(
        `Cannot transition from ${order.status} to ${newStatus}`
      )
    }

    const updated = await this.prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus as any },
      include: { items: true, payment: true, address: true },
    })

    await this.audit.log(adminId, 'order.updateStatus', 'Order', orderId, {
      from: order.status,
      to: newStatus,
    })

    return updated
  }

  async getDashboardStats() {
    const [totalOrders, totalRevenue, pendingOrders, totalUsers, recentOrders] =
      await Promise.all([
        this.prisma.order.count(),
        this.prisma.order.aggregate({
          where: { status: { in: ['CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'] } },
          _sum: { total: true },
        }),
        this.prisma.order.count({ where: { status: 'PENDING' } }),
        this.prisma.user.count(),
        this.prisma.order.findMany({
          take: 5,
          orderBy: { createdAt: 'desc' },
          include: {
            user: { select: { name: true, email: true } },
            items: true,
          },
        }),
      ])

    return {
      totalOrders,
      totalRevenue: Number(totalRevenue._sum.total ?? 0),
      pendingOrders,
      totalUsers,
      recentOrders,
    }
  }
}