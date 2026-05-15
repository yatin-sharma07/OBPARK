import { Inject, Injectable } from '@nestjs/common'
import { Redis } from 'ioredis'
import { REDIS_CLIENT } from './redis.module'

@Injectable()
export class CacheHelper {
  constructor(@Inject(REDIS_CLIENT) private redis: Redis) {}

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key)
    if (!value) return null
    try {
      return JSON.parse(value) as T
    } catch {
      return null
    }
  }

  async set(key: string, value: unknown, ttlSeconds: number): Promise<void> {
    await this.redis.set(key, JSON.stringify(value), 'EX', ttlSeconds)
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key)
  }

  async exists(key: string): Promise<boolean> {
    const count = await this.redis.exists(key)
    return count > 0
  }

  // Useful for RC lookups — get or fetch pattern
  async getOrSet<T>(
    key: string,
    ttlSeconds: number,
    fetchFn: () => Promise<T>,
  ): Promise<T> {
    const cached = await this.get<T>(key)
    if (cached) return cached
    const fresh = await fetchFn()
    await this.set(key, fresh, ttlSeconds)
    return fresh
  }
}