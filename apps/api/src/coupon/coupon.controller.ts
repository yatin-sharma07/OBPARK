import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common'
import { CouponService, CreateCouponDto } from './coupon.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Roles } from '../auth/guards/roles.guard'

@Controller('coupons')
export class CouponController {
  constructor(private couponService: CouponService) {}

  @Post('validate')
  @UseGuards(JwtAuthGuard)
  validate(@Body() dto: { code: string; subtotal: number }) {
    return this.couponService.validateCoupon(dto.code, dto.subtotal)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  list() {
    return this.couponService.listCoupons()
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  create(@Body() dto: CreateCouponDto) {
    return this.couponService.createCoupon(dto)
  }

  @Patch(':id/toggle')
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  toggle(@Param('id') id: string) {
    return this.couponService.toggleCoupon(id)
  }
}