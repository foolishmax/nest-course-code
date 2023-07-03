import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './bar/bar.module';
import { FooModule } from './foo/foo.module';

@Module({
  imports: [
    FooModule.register({ name: 'foolishmax' }),
    BarModule.forRoot({ aaa: 18, bbb: 'bar', isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
