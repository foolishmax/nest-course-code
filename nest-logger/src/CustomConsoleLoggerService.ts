import { ConsoleLogger } from '@nestjs/common';

// 仅仅重写log日志，继承自ConsoleLogger,因为ConsoleLogger实现了LoggerService接口
export class CustomConsoleLoggerService extends ConsoleLogger {
  log(message: string, context: string) {
    console.log(`[${context}]`, message);
  }
}
