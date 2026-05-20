import { Module, Global } from '@nestjs/common'
import IORedis from 'ioredis'
import { CacheHelper } from './cache.helper'
import { REDIS_CLIENT } from './redis.constants'

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: () => {
        const client = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379')
        client.on('error', (err) => console.error('Redis Client Error:', err))
        client.on('connect', () => console.log('Redis connected ✓'))
        return client
      },
    },
    CacheHelper,
  ],
  exports: [REDIS_CLIENT, CacheHelper],
})
export class RedisModule {}