import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { BarService } from './bar.service';

@Injectable()
export class FooService {
  constructor(
    @Inject(forwardRef(() => BarService)) private barService: BarService,
  ) {}

  foo() {
    return this.barService.bar();
  }
}
