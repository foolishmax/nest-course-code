import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // PermissionGuard中需要用到UserService，所以需要导出下
})
export class UserModule {}
