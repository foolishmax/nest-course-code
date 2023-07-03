import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/bar.module';
import { FooService } from './foo.service';
import { BarService } from './bar.service';

@Module({
  imports: [FooModule, BarModule],
  controllers: [AppController],
  providers: [AppService, FooService, BarService],
})
export class AppModule {}
