import { Global, Module } from '@nestjs/common';
import { CustomLogger } from './CustomLogger';

/**
 * 声明为全局模块
 */
@Global()
@Module({
  providers: [CustomLogger],
  exports: [CustomLogger],
})
export class LoggerModule {}
