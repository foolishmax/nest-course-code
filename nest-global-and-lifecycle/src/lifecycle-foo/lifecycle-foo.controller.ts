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
import { CreateLifecycleFooDto } from './dto/create-lifecycle-foo.dto';
import { UpdateLifecycleFooDto } from './dto/update-lifecycle-foo.dto';
import { LifecycleFooService } from './lifecycle-foo.service';

@Controller('lifecycle-foo')
export class LifecycleFooController
  implements OnModuleInit, OnApplicationBootstrap
{
  constructor(private readonly lifecycleFooService: LifecycleFooService) {}

  onModuleInit() {
    console.log('controller: lifecycle-foo onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('controller: lifecycle-foo onApplicationBootstrap');
  }

  @Post()
  create(@Body() createLifecycleFooDto: CreateLifecycleFooDto) {
    return this.lifecycleFooService.create(createLifecycleFooDto);
  }

  @Get()
  findAll() {
    return this.lifecycleFooService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lifecycleFooService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLifecycleFooDto: UpdateLifecycleFooDto,
  ) {
    return this.lifecycleFooService.update(+id, updateLifecycleFooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lifecycleFooService.remove(+id);
  }
}
