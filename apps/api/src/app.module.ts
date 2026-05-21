import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { RedisModule } from './redis/redis.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { VehicleModule } from './vehicle/vehicle.module'
import { AppController } from './app.controller'
import { CategoryModule } from './category/category.module'
import { ProductModule } from './product/product.module'


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RedisModule,
    AuthModule,
    UserModule,
    VehicleModule,
    CategoryModule,
    ProductModule,
  ],
  controllers: [AppController],
})
export class AppModule {}