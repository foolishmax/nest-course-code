import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { LifecycleFooController } from './lifecycle-foo.controller';
import { LifecycleFooService } from './lifecycle-foo.service';

@Module({
  controllers: [LifecycleFooController],
  providers: [LifecycleFooService],
})
export class LifecycleFooModule
  implements OnModuleInit, OnApplicationBootstrap
{
  onModuleInit() {
    console.log('module: lifecycle-foo onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('module: lifecycle-foo onApplicationBootstrap');
  }
}
