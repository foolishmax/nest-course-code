import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface BarModuleOptions {
  aaa: number;
  bbb: string;
}

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} =
  // new ConfigurableModuleBuilder<BarModuleOptions>().build();
  new ConfigurableModuleBuilder<BarModuleOptions>()
    .setClassMethodName('forRoot') // 起别名，默认register
    .setExtras({ isGlobal: true }, (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }))
    .build();
