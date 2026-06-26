import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Roles } from '../auth/guards/roles.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { AdminProductService, CreateProductDto } from './admin-product.service'
import { AdminOrderService } from './admin-order.service'

@Controller('admin')
@UseGuards(JwtAuthGuard)
@Roles('ADMIN')
export class AdminController {
  constructor(
    private adminProduct: AdminProductService,
    private adminOrder: AdminOrderService,
  ) {}

  @Get('dashboard')
  getDashboard() {
    return this.adminOrder.getDashboardStats()
  }

  @Get('products')
  listProducts(@Query() query: any) {
    return this.adminProduct.listProducts(query)
  }

  @Post('products')
  createProduct(
    @CurrentUser() user: { id: string },
    @Body() dto: CreateProductDto,
  ) {
    return this.adminProduct.createProduct(user.id, dto)
  }

  @Patch('products/:id')
  updateProduct(
    @CurrentUser() user: { id: string },
    @Param('id') id: string,
    @Body() dto: Partial<CreateProductDto>,
  ) {
    return this.adminProduct.updateProduct(user.id, id, dto)
  }

  @Delete('products/:id')
  archiveProduct(
    @CurrentUser() user: { id: string },
    @Param('id') id: string,
  ) {
    return this.adminProduct.archiveProduct(user.id, id)
  }

  @Get('orders')
  listOrders(@Query() query: any) {
    return this.adminOrder.listOrders(query)
  }

  @Get('orders/:id')
  getOrder(@Param('id') id: string) {
    return this.adminOrder.getOrder(id)
  }

  @Patch('orders/:id/status')
  updateOrderStatus(
    @CurrentUser() user: { id: string },
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.adminOrder.updateStatus(user.id, id, status)
  }
}