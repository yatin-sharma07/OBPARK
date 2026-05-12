import { Module, Global } from '@nestjs/common'
import IORedis from 'ioredis'

export const REDIS_CLIENT = 'REDIS_CLIENT'

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: () => {
        const client = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379')
        client.on('error', (err) => console.error('Redis error:', err))
        return client
      },
    },
  ],
  exports: [REDIS_CLIENT],
})
export class RedisModule {}