import { DynamicModule, Module } from '@nestjs/common';
import { FooController } from './foo.controller';
import { FooService } from './foo.service';

// @Module({
//   controllers: [FooController],
//   providers: [FooService],
// })
@Module({}) // 创建动态模块
export class FooModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: FooModule,
      controllers: [FooController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        FooService,
      ],
      exports: [],
    };
  }
}
