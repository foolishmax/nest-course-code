import { Test, TestingModule } from '@nestjs/testing';
import { DynamicLoggerTestController } from './dynamic-logger-test.controller';
import { DynamicLoggerTestService } from './dynamic-logger-test.service';

describe('DynamicLoggerTestController', () => {
  let controller: DynamicLoggerTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicLoggerTestController],
      providers: [DynamicLoggerTestService],
    }).compile();

    controller = module.get<DynamicLoggerTestController>(DynamicLoggerTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
