// https://github.com/typestack/class-validator
import { IsInt } from 'class-validator';

export class User {
  name: string;
  @IsInt()
  age: number;
  sex: boolean;
  hobbies: Array<string>;
}
