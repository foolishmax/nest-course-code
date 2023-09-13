import { IsNotEmpty } from 'class-validator';

export class CreateAaaDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
