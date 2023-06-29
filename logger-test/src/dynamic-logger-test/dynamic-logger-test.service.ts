import { Inject, Injectable } from '@nestjs/common';
import { CreateDynamicLoggerTestDto } from './dto/create-dynamic-logger-test.dto';
import { UpdateDynamicLoggerTestDto } from './dto/update-dynamic-logger-test.dto';
import { CustomLogger } from 'src/dynamic-logger/CustomLogger';

@Injectable()
export class DynamicLoggerTestService {
  create(createDynamicLoggerTestDto: CreateDynamicLoggerTestDto) {
    return 'This action adds a new dynamicLoggerTest';
  }

  findAll() {
    return `This action returns all dynamicLoggerTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dynamicLoggerTest`;
  }

  update(id: number, updateDynamicLoggerTestDto: UpdateDynamicLoggerTestDto) {
    return `This action updates a #${id} dynamicLoggerTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} dynamicLoggerTest`;
  }
}
