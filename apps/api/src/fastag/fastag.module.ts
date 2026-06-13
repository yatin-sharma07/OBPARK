import { Module } from '@nestjs/common'
import { FastagService } from './fastag.service'
import { FastagController } from './fastag.controller'
import { FastagClient } from './fastag.client'
import { RazorpayClient } from '../payment/razorpay.client'
import { WebhookController } from '../payment/webhook.controller'

@Module({
  providers: [FastagService, FastagClient, RazorpayClient],
  controllers: [FastagController, WebhookController],
  exports: [FastagService, RazorpayClient],
})
export class FastagModule {}