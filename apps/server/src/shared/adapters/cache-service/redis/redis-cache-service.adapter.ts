import type { CacheService } from '@/shared/base/cache-service'
import { env } from '@/shared/config/env'
import Redis from 'ioredis'

export class RedisCacheServiceAdapter implements CacheService {
  private readonly redisService: Redis

  constructor() {
    console.log(env)
    this.redisService = new Redis({
      host: env.REDIS_HOST,
      port: env.REDIS_PORT,
      password: env.REDIS_PASSWORD
    })
  }

  async get<T>(key: string): Promise<T | undefined> {
    const value = await this.redisService.get(key)
    return value ? JSON.parse(value) : undefined
  }

  async set<T>(key: string, value: T): Promise<void> {
    await this.redisService.set(key, JSON.stringify(value), 'EX', 60 * 60 * 24 * 7) // 1 week
  }

  async remove(key: string): Promise<void> {
    await this.redisService.del(key)
  }
}
