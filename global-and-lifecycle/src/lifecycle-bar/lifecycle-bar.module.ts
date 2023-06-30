import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { LifecycleBarController } from './lifecycle-bar.controller';
import { LifecycleBarService } from './lifecycle-bar.service';

@Module({
  controllers: [LifecycleBarController],
  providers: [LifecycleBarService],
})
export class LifecycleBarModule
  implements OnModuleInit, OnApplicationBootstrap
{
  onModuleInit() {
    console.log('module: lifecycle-foo onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('module: lifecycle-foo onApplicationBootstrap');
  }
}
