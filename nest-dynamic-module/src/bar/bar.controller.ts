import { Controller, Get, Inject } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './bar.module-definition';

@Controller('bar')
export class BarController {
  @Inject(MODULE_OPTIONS_TOKEN)
  private readonly options: typeof OPTIONS_TYPE;

  @Get()
  hello() {
    return this.options;
  }
}
