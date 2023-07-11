import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6380,
          },
        });
        await client.connect();
        return client;
      },
    },
  ],
})
export class AppModule {}
