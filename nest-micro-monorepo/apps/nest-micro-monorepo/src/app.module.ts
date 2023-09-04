import { Module } from '@nestjs/common';
import { Lib1Module } from 'libs/lib1/src';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [Lib1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
