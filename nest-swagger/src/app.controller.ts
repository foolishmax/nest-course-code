import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBasicAuth,
  ApiBearerAuth,
  ApiBody,
  ApiCookieAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { CccDto } from './ccc.dto';
import { CccVo } from './ccc.vo';

@ApiTags('xxx')
@Controller('xxx')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('xxx-get')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiBearerAuth('bearer')
  @ApiTags('xxx-get')
  @ApiOperation({ summary: '测试aaa', description: 'aaa描述' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'aaa成功',
    type: String,
  })
  @ApiQuery({
    name: 'a1',
    type: String,
    description: 'a1 param',
    required: false,
    example: '111',
  })
  @ApiQuery({
    name: 'a2',
    type: Number,
    description: 'a2 param',
    required: true,
    example: 2222,
  })
  @Get('aaa')
  aaa(@Query('a1') a1, @Query('a2') a2) {
    console.log(a1, a2);
    return 'result:' + a1 + a2;
  }

  @ApiCookieAuth('cookie')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'bbb成功',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'id 不合法',
  })
  @ApiParam({
    name: 'id',
    description: 'ID',
    required: true,
    example: 222,
  })
  @Get('bbb/:id')
  bbb(@Param('id') id) {
    console.log(id);
    return 'bbb success';
  }

  @ApiBasicAuth('basic')
  @ApiOperation({ summary: '测试 ccc' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'ccc 成功',
    type: CccVo,
  })
  @ApiBody({
    type: CccDto,
  })
  @Post('ccc')
  ccc(@Body('ccc') ccc: CccDto) {
    console.log(ccc);

    const vo = new CccVo();
    vo.aaa = 111;
    vo.bbb = 222;
    return vo;
  }
}
