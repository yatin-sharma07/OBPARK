import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { CartModule } from '../cart/cart.module'
import { FastagModule } from '../fastag/fastag.module'

@Module({
  imports: [
    CartModule,
    FastagModule,
  ],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}