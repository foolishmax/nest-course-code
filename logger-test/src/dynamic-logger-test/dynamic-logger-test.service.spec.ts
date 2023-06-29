import { Test, TestingModule } from '@nestjs/testing';
import { DynamicLoggerTestService } from './dynamic-logger-test.service';

describe('DynamicLoggerTestService', () => {
  let service: DynamicLoggerTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicLoggerTestService],
    }).compile();

    service = module.get<DynamicLoggerTestService>(DynamicLoggerTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
