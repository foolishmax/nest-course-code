import { Module } from '@nestjs/common';
import { DynamicLoggerTestService } from './dynamic-logger-test.service';
import { DynamicLoggerTestController } from './dynamic-logger-test.controller';
import { DynamicLoggerModule } from 'src/dynamic-logger/dynamic-logger.module';

@Module({
  imports: [
    DynamicLoggerModule.register({
      xxx: 1,
      yyy: 2,
    }),
  ],
  controllers: [DynamicLoggerTestController],
  providers: [DynamicLoggerTestService],
})
export class DynamicLoggerTestModule {}
