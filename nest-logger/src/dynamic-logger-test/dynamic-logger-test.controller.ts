import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { DynamicLoggerTestService } from './dynamic-logger-test.service';
import { CreateDynamicLoggerTestDto } from './dto/create-dynamic-logger-test.dto';
import { UpdateDynamicLoggerTestDto } from './dto/update-dynamic-logger-test.dto';
import { CustomLogger } from 'src/dynamic-logger/CustomLogger';

@Controller('dynamic-logger-test')
export class DynamicLoggerTestController {
  @Inject(CustomLogger)
  private logger: CustomLogger;
  constructor(
    private readonly dynamicLoggerTestService: DynamicLoggerTestService,
  ) {}

  @Post()
  create(@Body() createDynamicLoggerTestDto: CreateDynamicLoggerTestDto) {
    return this.dynamicLoggerTestService.create(createDynamicLoggerTestDto);
  }

  @Get()
  findAll() {
    this.logger.log('yyy', DynamicLoggerTestService.name);
    return this.dynamicLoggerTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dynamicLoggerTestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDynamicLoggerTestDto: UpdateDynamicLoggerTestDto,
  ) {
    return this.dynamicLoggerTestService.update(
      +id,
      updateDynamicLoggerTestDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynamicLoggerTestService.remove(+id);
  }
}
