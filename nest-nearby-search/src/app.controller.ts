import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from './redis/redis.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(RedisService)
  private redisService: RedisService;

  @Get('addPos')
  async addPos(
    @Query('name') pos: string,
    @Query('longitude') longitude: number,
    @Query('latitude') latitude: number,
  ) {
    if (!pos || !longitude || !latitude) {
      throw new BadRequestException('位置信息不全');
    }

    try {
      await this.redisService.geoAdd('positions', pos, [longitude, latitude]);
      return {
        message: '添加成功',
        statusCode: 200,
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('allPos')
  async allPos() {
    return this.redisService.geoList('positions');
  }

  @Get('pos')
  async pos(@Query('name') name: string) {
    return this.redisService.geoPos('positions', name);
  }

  @Get('nearby')
  async nearby(
    @Query('longitude') longitude: number,
    @Query('latitude') latitude: number,
    @Query('radius') radius: number,
  ) {
    if (!longitude || !latitude) {
      throw new BadRequestException('缺少位置信息');
    }
    if (!radius) {
      throw new BadRequestException('缺少搜索半径');
    }

    return this.redisService.geoRadius(
      'positions',
      [longitude, latitude],
      radius,
    );
  }
}
