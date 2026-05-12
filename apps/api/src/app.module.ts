import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { RedisModule } from './redis/redis.module'
import { env } from './config/env' // triggers crash on missing vars

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RedisModule,
  ],
  controllers: [AppController],
})
export class AppModule {}