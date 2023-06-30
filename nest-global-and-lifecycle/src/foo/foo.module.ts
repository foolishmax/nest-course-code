import { Global, Module } from '@nestjs/common';
import { FooController } from './foo.controller';
import { FooService } from './foo.service';

// 如果 FooModule 被很多处地方引用，每次引入太麻烦，可以把它声明为全局的
// 但是尽量少用，不然provider的来源追踪会变得困难，降低了代码的可维护性
@Global()
@Module({
  controllers: [FooController],
  providers: [FooService],
  exports: [FooService],
})
export class FooModule {}
