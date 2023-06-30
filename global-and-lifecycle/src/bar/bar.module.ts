import { Module } from '@nestjs/common';
import { BarController } from './bar.controller';
import { BarService } from './bar.service';

@Module({
  imports: [], // 因为FooModule被声明为全局，所以无需手动imports
  // imports: [FooModule],
  controllers: [BarController],
  providers: [BarService],
})
export class BarModule {}
