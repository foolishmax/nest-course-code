import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('api/person')
export class PersonController {
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name}, age=${age}`;
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `received: id=${id}`;
  }

  @Post()
  json(@Body() createPersonDto: CreatePersonDto) {
    return `received-json: ${JSON.stringify(createPersonDto)}`;
  }

  @Post()
  formUrlEncoded(@Body() createPersonDto: CreatePersonDto) {
    return `received-formUrlEncoded: ${JSON.stringify(createPersonDto)}`;
  }

  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  formData(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log('files', files);
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
}
