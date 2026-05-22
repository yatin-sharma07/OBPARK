import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common'
import { FastagService } from './fastag.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { IsString, IsNumber, Min, Max } from 'class-validator'

class LookupDto {
  @IsString()
  vrn!: string
}

class RechargeDto {
  @IsString()
  vrn!: string

  @IsNumber()
  @Min(100)
  @Max(10000)
  amount!: number
}

class ConfirmDto {
  @IsString()
  razorpayOrderId!: string

  @IsString()
  razorpayPaymentId!: string
}

@Controller('fastag')
@UseGuards(JwtAuthGuard)
export class FastagController {
  constructor(private fastagService: FastagService) {}

  @Post('lookup')
  lookup(
    @CurrentUser() user: { id: string },
    @Body() dto: LookupDto,
  ) {
    return this.fastagService.lookup(user.id, dto.vrn)
  }

  @Post('recharge')
  initiateRecharge(
    @CurrentUser() user: { id: string },
    @Body() dto: RechargeDto,
  ) {
    return this.fastagService.initiateRecharge(user.id, dto.vrn, dto.amount)
  }

  @Post('confirm')
  confirmRecharge(@Body() dto: ConfirmDto) {
    return this.fastagService.confirmRecharge(
      dto.razorpayOrderId,
      dto.razorpayPaymentId,
    )
  }

  @Get('history')
  getHistory(@CurrentUser() user: { id: string }) {
    return this.fastagService.getHistory(user.id)
  }
}