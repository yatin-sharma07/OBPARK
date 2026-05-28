import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common'
import { OrderService } from './order.service'
import {
  CreateOrderDto,
  SaveAddressDto,
} from './dto/order.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrderController {
  constructor(
    private orderService: OrderService,
  ) {}

  @Get()
  getOrders(
    @CurrentUser() user: { id: string },
  ) {
    return this.orderService.getOrders(
      user.id,
    )
  }

  @Get(':id')
  getOrder(
    @CurrentUser() user: { id: string },
    @Param('id') orderId: string,
  ) {
    return this.orderService.getOrder(
      user.id,
      orderId,
    )
  }

  @Post()
  createOrder(
    @CurrentUser() user: { id: string },
    @Body() dto: CreateOrderDto,
  ) {
    return this.orderService.createOrder(
      user.id,
      dto,
    )
  }

  @Post('confirm-payment')
  confirmPayment(
    @CurrentUser() user: { id: string },
    @Body()
    body: {
      razorpayOrderId: string
      razorpayPaymentId: string
    },
  ) {
    return this.orderService.confirmPayment(
      user.id,
      body.razorpayOrderId,
      body.razorpayPaymentId,
    )
  }

  @Get('addresses/saved')
  getAddresses(
    @CurrentUser() user: { id: string },
  ) {
    return this.orderService.getAddresses(
      user.id,
    )
  }

  @Post('addresses/saved')
  saveAddress(
    @CurrentUser() user: { id: string },
    @Body() dto: SaveAddressDto,
  ) {
    return this.orderService.saveAddress(
      user.id,
      dto,
    )
  }
}