import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateFooDto } from './dto/create-foo.dto';
import { UpdateFooDto } from './dto/update-foo.dto';
import { FooService } from './foo.service';

@Controller('foo')
export class FooController {
  @Inject('CONFIG_OPTIONS')
  private readonly configOptions: Record<string, any>;

  constructor(private readonly fooService: FooService) {}

  @Post()
  create(@Body() createFooDto: CreateFooDto) {
    return this.fooService.create(createFooDto);
  }

  @Get()
  findAll() {
    console.log(this.configOptions);
    return this.fooService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fooService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFooDto: UpdateFooDto) {
    return this.fooService.update(+id, updateFooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fooService.remove(+id);
  }
}
