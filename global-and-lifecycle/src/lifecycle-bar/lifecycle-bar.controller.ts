import {
  Body,
  Controller,
  Delete,
  Get,
  OnApplicationBootstrap,
  OnModuleInit,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateLifecycleBarDto } from './dto/create-lifecycle-bar.dto';
import { UpdateLifecycleBarDto } from './dto/update-lifecycle-bar.dto';
import { LifecycleBarService } from './lifecycle-bar.service';

@Controller('lifecycle-bar')
export class LifecycleBarController
  implements OnModuleInit, OnApplicationBootstrap
{
  constructor(private readonly lifecycleBarService: LifecycleBarService) {}

  onModuleInit() {
    console.log('controller: lifecycle-foo onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('controller: lifecycle-foo onApplicationBootstrap');
  }

  @Post()
  create(@Body() createLifecycleBarDto: CreateLifecycleBarDto) {
    return this.lifecycleBarService.create(createLifecycleBarDto);
  }

  @Get()
  findAll() {
    return this.lifecycleBarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lifecycleBarService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLifecycleBarDto: UpdateLifecycleBarDto,
  ) {
    return this.lifecycleBarService.update(+id, updateLifecycleBarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lifecycleBarService.remove(+id);
  }
}
