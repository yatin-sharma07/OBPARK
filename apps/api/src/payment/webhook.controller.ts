import {
  Controller,
  Post,
  Req,
  Headers,
  RawBodyRequest,
  HttpCode,
  BadRequestException,
  Logger,
} from '@nestjs/common'
import { Request } from 'express'
import { RazorpayClient } from './razorpay.client'
import { FastagService } from '../fastag/fastag.service'

@Controller('payments')
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name)

  constructor(
    private razorpay: RazorpayClient,
    private fastagService: FastagService,
  ) {}

  @Post('webhook')
  @HttpCode(200)
  async handleWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('x-razorpay-signature') signature: string,
  ) {
    const rawBody = req.rawBody?.toString() ?? JSON.stringify(req.body)

    const valid = this.razorpay.verifyWebhookSignature(rawBody, signature ?? '')
    if (!valid) {
      this.logger.warn('Invalid webhook signature received')
      throw new BadRequestException('Invalid signature')
    }

    const event = req.body
    this.logger.log(`Webhook event: ${event.event}`)

    if (event.event === 'payment.captured') {
      const payment = event.payload?.payment?.entity
      if (payment?.order_id && payment?.id) {
        await this.fastagService.confirmRecharge(payment.order_id, payment.id)
        this.logger.log(`Recharge confirmed for order ${payment.order_id}`)
      }
    }

    return { received: true }
  }
}