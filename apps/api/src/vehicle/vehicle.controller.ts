import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common'
import { VehicleService } from './vehicle.service'
import { AddVehicleDto } from './dto/add-vehicle.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'

@Controller('vehicles')
@UseGuards(JwtAuthGuard)
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Post()
  addVehicle(
    @CurrentUser() user: { id: string },
    @Body() dto: AddVehicleDto,
  ) {
    return this.vehicleService.addVehicle(user.id, dto)
  }

  @Get()
  getVehicles(@CurrentUser() user: { id: string }) {
    return this.vehicleService.getVehicles(user.id)
  }

  @Delete(':id')
  deleteVehicle(
    @CurrentUser() user: { id: string },
    @Param('id') vehicleId: string,
  ) {
    return this.vehicleService.deleteVehicle(user.id, vehicleId)
  }
}