import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { TestModule } from './logger-test/test.module';
import { DynamicLoggerModule } from './dynamic-logger/dynamic-logger.module';
import { DynamicLoggerTestModule } from './dynamic-logger-test/dynamic-logger-test.module';
import { CustomLogger } from './logger/CustomLogger';

@Module({
  imports: [
    LoggerModule,
    TestModule,
    DynamicLoggerModule,
    DynamicLoggerTestModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLogger],
})
export class AppModule {}
