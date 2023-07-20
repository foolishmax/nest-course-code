import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { RedisController } from './redis.controller';
import { RedisService } from './redis.service';

@Module({
  controllers: [RedisController],
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        });
        await client.connect();
        return client;
      },
    },
  ],
  exports: [RedisService],
})
export class RedisModule {}
