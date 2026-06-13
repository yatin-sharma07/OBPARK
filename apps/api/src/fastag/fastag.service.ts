import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CacheHelper } from '../redis/cache.helper'
import { FastagClient } from './fastag.client'
import { RazorpayClient } from '../payment/razorpay.client'
import { randomUUID } from 'crypto'

const FASTAG_CACHE_TTL = 60 * 5

@Injectable()
export class FastagService {
  constructor(
    private prisma: PrismaService,
    private cache: CacheHelper,
    private fastagClient: FastagClient,
    private razorpay: RazorpayClient,
  ) {}

  async lookup(userId: string, vrn: string) {
    const vehicle = await this.prisma.vehicle.findFirst({
      where: { vrn: vrn.toUpperCase(), userId, isActive: true },
    })
    if (!vehicle) throw new NotFoundException('Vehicle not found on your account')

    const cacheKey = `fastag:balance:${vrn}`
    const balance = await this.cache.getOrSet(
      cacheKey,
      FASTAG_CACHE_TTL,
      () => this.fastagClient.getBalance(vrn),
    )

    return { vehicle, ...balance }
  }

  async initiateRecharge(userId: string, vrn: string, amount: number) {
    if (amount < 100 || amount > 10000) {
      throw new BadRequestException('Recharge amount must be between ₹100 and ₹10,000')
    }

    const vehicle = await this.prisma.vehicle.findFirst({
      where: { vrn: vrn.toUpperCase(), userId, isActive: true },
    })
    if (!vehicle) throw new NotFoundException('Vehicle not found on your account')

    const idempotencyKey = randomUUID()
    const receipt = `fastag_${vrn}_${Date.now()}`
    const order = await this.razorpay.createOrder(amount, receipt)

    await this.prisma.rechargeTransaction.create({
      data: {
        vehicleId: vehicle.id,
        vrn: vrn.toUpperCase(),
        amount,
        razorpayOrderId: order.id,
        idempotencyKey,
        status: 'PENDING',
      },
    })

    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      idempotencyKey,
      vrn,
      ...(order.id.startsWith('mock_') && {
        mockPaymentId: `mock_pay_${Date.now()}`,
      }),
    }
  }

  async confirmRecharge(razorpayOrderId: string, razorpayPaymentId: string) {
    const transaction = await this.prisma.rechargeTransaction.findUnique({
      where: { razorpayOrderId },
    })
    if (!transaction) throw new NotFoundException('Transaction not found')
    if (transaction.status === 'SUCCESS') return { alreadyProcessed: true }

    await this.prisma.rechargeTransaction.update({
      where: { razorpayOrderId },
      data: { status: 'SUCCESS', razorpayPaymentId },
    })

    await this.cache.del(`fastag:balance:${transaction.vrn}`)
    return { success: true, vrn: transaction.vrn, amount: transaction.amount }
  }

  async getHistory(userId: string) {
    const vehicles = await this.prisma.vehicle.findMany({
      where: { userId, isActive: true },
      select: { id: true },
    })
    const vehicleIds = vehicles.map((v) => v.id)

    return this.prisma.rechargeTransaction.findMany({
      where: { vehicleId: { in: vehicleIds } },
      orderBy: { createdAt: 'desc' },
      take: 20,
    })
  }
}