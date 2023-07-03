import { Module } from '@nestjs/common';
import { BarController } from './bar.controller';
import { ConfigurableModuleClass } from './bar.module-definition';

@Module({
  controllers: [BarController],
})
export class BarModule extends ConfigurableModuleClass {}
