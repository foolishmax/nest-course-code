import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // JwtModule.register({
    //   secret: 'foolishmax',
    //   signOptions: {
    //     expiresIn: '7d',
    //   },
    // }),
    JwtModule.registerAsync({
      async useFactory() {
        return {
          secret: 'foolishmax', // 加密jwt的密钥，token过期时间expiresIn，7天
          signOptions: {
            expiresIn: '7d',
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
