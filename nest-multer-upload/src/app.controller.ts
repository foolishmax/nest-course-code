import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpException,
  HttpStatus,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { log } from 'console';
import { AppService } from './app.service';
import { CustomFileValidator } from './custom.file.validator';
import { storage } from './uoload.storage';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    log('getHello');
    return this.appService.getHello();
  }

  // 单文件上传
  // @Post('aaa')
  // @UseInterceptors(
  //   FileInterceptor('aaa', {
  //     dest: 'uploads',
  //   }),
  // )
  // uploadFile(
  //   // 自定义实现文件大小限制
  //   @UploadedFile(FileSizeValidationPipePipe) file: Express.Multer.File,
  //   @Body() body,
  // ) {
  //   console.log('body:', body);
  //   console.log('file:', file);
  // }

  // 单文件上传
  @Post('aaa')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFile(
    // 常用的封装好的校验规则
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new CustomFileValidator({}), // 自定义校验规则
          new MaxFileSizeValidator({ maxSize: 1000 }), // 校验文件大小
          new FileTypeValidator({ fileType: 'image/jpeg' }), // 校验文件类型
        ],
        exceptionFactory: (error) => {
          throw new HttpException('xxx' + error, HttpStatus.BAD_REQUEST);
        },
      }),
    )
    file: Express.Multer.File,
    @Body() body,
  ) {
    console.log('body:', body);
    console.log('file:', file);
  }

  // 多文件上传
  @Post('bbb')
  @UseInterceptors(
    FilesInterceptor('bbb', 3, {
      dest: 'uploads',
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // 多文件字段上传
  @Post('ccc')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'aaa', maxCount: 2 },
        { name: 'bbb', maxCount: 3 },
      ],
      {
        dest: 'uploads',
      },
    ),
  )
  uploadFileFields(
    @UploadedFiles()
    files: { aaa?: Express.Multer.File[]; bbb?: Express.Multer.File[] },
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // anyfile
  // @Post('ddd')
  // @UseInterceptors(
  //   AnyFilesInterceptor({
  //     dest: 'uploads',
  //   }),
  // )
  // uploadAnyFiles(
  //   @UploadedFiles() files: Array<Express.Multer.File>,
  //   @Body() body,
  // ) {
  //   console.log('body', body);
  //   console.log('files', files);
  // }

  // 自定义storage
  @Post('ddd')
  @UseInterceptors(AnyFilesInterceptor({ storage }))
  uploadAnyFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }
}
