import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import crypto from 'crypto'

export interface RazorpayOrder {
  id: string
  amount: number
  currency: string
  receipt: string
  status: string
}

export interface RazorpayVerifyPayload {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}

@Injectable()
export class RazorpayClient {
  private readonly logger = new Logger(RazorpayClient.name)
  private readonly isMock: boolean
  private readonly keyId: string | undefined
  private readonly keySecret: string | undefined
  private readonly webhookSecret: string | undefined

  constructor(private config: ConfigService) {
    this.keyId = config.get<string>('RAZORPAY_KEY_ID')
    this.keySecret = config.get<string>('RAZORPAY_KEY_SECRET')
    this.webhookSecret = config.get<string>('RAZORPAY_WEBHOOK_SECRET')
    this.isMock = !this.keyId || !this.keySecret
    if (this.isMock) {
      this.logger.warn('Razorpay keys not set — running in mock mode')
    }
  }

  async createOrder(amount: number, receipt: string): Promise<RazorpayOrder> {
    if (this.isMock) {
      return {
        id: `mock_order_${Date.now()}`,
        amount: amount * 100,
        currency: 'INR',
        receipt,
        status: 'created',
      }
    }

    const Razorpay = require('razorpay')
    const instance = new Razorpay({
      key_id: this.keyId,
      key_secret: this.keySecret,
    })

    return instance.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt,
    })
  }

  verifyWebhookSignature(body: string, signature: string): boolean {
    if (this.isMock) return true
    const expected = crypto
      .createHmac('sha256', this.webhookSecret ?? '')
      .update(body)
      .digest('hex')
    return expected === signature
  }

  verifyPaymentSignature(payload: RazorpayVerifyPayload): boolean {
    if (this.isMock) return true
    const body = `${payload.razorpay_order_id}|${payload.razorpay_payment_id}`
    const expected = crypto
      .createHmac('sha256', this.keySecret ?? '')
      .update(body)
      .digest('hex')
    return expected === payload.razorpay_signature
  }
}