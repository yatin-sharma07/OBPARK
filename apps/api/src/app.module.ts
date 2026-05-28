import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
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
import { AppController } from './app.controller'

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
  ],
  controllers: [AppController],
})
export class AppModule {}