import { DynamicModule, Module } from '@nestjs/common';
import { CustomLogger } from './CustomLogger';

@Module({})
export class DynamicLoggerModule {
  static register(options): DynamicModule {
    return {
      module: DynamicLoggerModule,
      providers: [
        CustomLogger,
        {
          provide: 'LOG_OPTIONS',
          useValue: options,
        },
      ],
      exports: [CustomLogger, 'LOG_OPTIONS'],
    };
  }
}
