import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { CartModule } from '../cart/cart.module'
import { FastagModule } from '../fastag/fastag.module'
import { CouponModule } from '../coupon/coupon.module'

@Module({
  imports: [
    CartModule,
    FastagModule,
    CouponModule,
  ],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}