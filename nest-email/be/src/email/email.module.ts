import { Module } from '@nestjs/common';
import { RedisModule } from 'src/redis/redis.module';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
  imports: [RedisModule],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
