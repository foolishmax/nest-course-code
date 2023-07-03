import { Module, forwardRef } from '@nestjs/common';
import { FooModule } from 'src/foo/foo.module';

@Module({
  imports: [forwardRef(() => FooModule)],
})
export class BarModule {}
