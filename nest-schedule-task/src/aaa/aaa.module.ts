import { Module } from '@nestjs/common';
import { AaaController } from './aaa.controller';
import { AaaService } from './aaa.service';

@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule {}
