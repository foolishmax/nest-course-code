import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { CreateLifecycleFooDto } from './dto/create-lifecycle-foo.dto';
import { UpdateLifecycleFooDto } from './dto/update-lifecycle-foo.dto';

@Injectable()
export class LifecycleFooService
  implements OnModuleInit, OnApplicationBootstrap
{
  onModuleInit() {
    console.log('service: lifecycle-foo onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('service: lifecycle-foo onApplicationBootstrap');
  }

  create(createLifecycleFooDto: CreateLifecycleFooDto) {
    return 'This action adds a new lifecycleFoo';
  }

  findAll() {
    return `This action returns all lifecycleFoo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lifecycleFoo`;
  }

  update(id: number, updateLifecycleFooDto: UpdateLifecycleFooDto) {
    return `This action updates a #${id} lifecycleFoo`;
  }

  remove(id: number) {
    return `This action removes a #${id} lifecycleFoo`;
  }
}
