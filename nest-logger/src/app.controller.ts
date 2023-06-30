import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger();

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.debug('aaa', AppController.name);
    this.logger.error('bbb', AppController.name);
    this.logger.log('ccc', AppController.name);
    this.logger.verbose('ddd', AppController.name);
    this.logger.warn('eee', AppController.name);

    //output:
    // [Nest] 87016  - 06/28/2023, 4:21:43 PM   DEBUG [AppController] aaa
    // [Nest] 87016  - 06/28/2023, 4:21:43 PM   ERROR [AppController] bbb
    // [Nest] 87016  - 06/28/2023, 4:21:43 PM     LOG [AppController] ccc
    // [Nest] 87016  - 06/28/2023, 4:21:43 PM VERBOSE [AppController] ddd
    // [Nest] 87016  - 06/28/2023, 4:21:43 PM    WARN [AppController] eee

    return this.appService.getHello();
  }
}
