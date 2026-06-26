import { Module } from '@nestjs/common'
import { AdminController } from './admin.controller'
import { AdminProductService } from './admin-product.service'
import { AdminOrderService } from './admin-order.service'
import { AuditService } from './audit.service'
import { RedisModule } from '../redis/redis.module'

@Module({
  imports: [RedisModule],
  providers: [AdminProductService, AdminOrderService, AuditService],
  controllers: [AdminController],
  exports: [AuditService],
})
export class AdminModule {}