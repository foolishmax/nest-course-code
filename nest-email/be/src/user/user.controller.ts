import {
  Body,
  Controller,
  Inject,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';
import { LoginUserDto } from './dto/LoginUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(RedisService)
  private redisService: RedisService;

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const { email, code } = loginUserDto;

    const codeInRedis = await this.redisService.get(`captcha_${email}`);

    if (!codeInRedis) {
      throw new UnauthorizedException('验证码已失效');
    }
    if (code !== codeInRedis) {
      throw new UnauthorizedException('验证码不正确');
    }

    const user = await this.userService.findUserByEmail(email);

    console.log(user);

    return 'success';
  }
}
