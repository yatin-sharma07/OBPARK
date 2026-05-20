import { Module } from '@nestjs/common'
import { VehicleService } from './vehicle.service'
import { VehicleController } from './vehicle.controller'
import { SurepassClient } from './surepass.client'

@Module({
  providers: [VehicleService, SurepassClient],
  controllers: [VehicleController],
  exports: [VehicleService],
})
export class VehicleModule {}