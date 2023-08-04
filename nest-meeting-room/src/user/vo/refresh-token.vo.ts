import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenVo {
  @ApiProperty()
  accsess_token: string;

  @ApiProperty()
  refresh_token: string;
}
