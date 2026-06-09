import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { PrismaModule } from './prisma/prisma.module'
import { RedisModule } from './redis/redis.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { VehicleModule } from './vehicle/vehicle.module'
import { FastagModule } from './fastag/fastag.module'
import { CartModule } from './cart/cart.module'
import { OrderModule } from './order/order.module'
import { ProductModule } from './product/product.module'
import { CategoryModule } from './category/category.module'
import { AdminModule } from './admin/admin.module'
import { CouponModule } from './coupon/coupon.module'
import { AppController } from './app.controller'
import { RolesGuard } from './auth/guards/roles.guard'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RedisModule,
    AuthModule,
    UserModule,
    VehicleModule,
    FastagModule,
    CartModule,
    OrderModule,
    ProductModule,
    CategoryModule,
    AdminModule,
    CouponModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}