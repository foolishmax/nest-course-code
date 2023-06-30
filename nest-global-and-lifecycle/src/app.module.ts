import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './bar/bar.module';
import { FooModule } from './foo/foo.module';
import { LifecycleFooModule } from './lifecycle-foo/lifecycle-foo.module';
import { LifecycleBarModule } from './lifecycle-bar/lifecycle-bar.module';

@Module({
  imports: [FooModule, BarModule, LifecycleFooModule, LifecycleBarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
