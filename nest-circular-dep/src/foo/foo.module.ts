import { Module, forwardRef } from '@nestjs/common';
import { BarModule } from 'src/bar/bar.module';

@Module({
  imports: [forwardRef(() => BarModule)],
})
export class FooModule {}
