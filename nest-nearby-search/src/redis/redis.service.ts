import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  async geoAdd(key: string, pos: string, loc: [number, number]) {
    return await this.redisClient.geoAdd(key, {
      longitude: loc[0],
      latitude: loc[1],
      member: pos,
    });
  }

  async geoPos(key: string, pos: string) {
    const res = await this.redisClient.geoPos(key, pos);
    return {
      name: pos,
      longitude: res[0].longitude,
      latitude: res[0].latitude,
    };
  }

  async geoList(key: string) {
    // geo信息底层使用zset存储，所以查询所有key使用zrange
    // zset是有序列表，列表项会有一个分数，zrange是返回某个分数段的key，传入0、-1就是返回所有的
    const positions = await this.redisClient.zRange(key, 0, -1);
    const list = [];
    for (let i = 0; i < positions.length; i++) {
      const pos = positions[i];
      const res = await this.geoPos(key, pos);
      list.push(res);
    }
    return list;
  }

  // 获取附近的点
  async geoRadius(key: string, pos: [number, number], radius: number) {
    const positions = await this.redisClient.geoRadius(
      key,
      {
        longitude: pos[0],
        latitude: pos[1],
      },
      radius,
      'km',
    );

    const list = [];
    for (let i = 0; i < positions.length; i++) {
      const pos = positions[i];
      const res = await this.geoPos(key, pos);
      list.push(res);
    }
    return list;
  }
}
