import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { CreateLifecycleBarDto } from './dto/create-lifecycle-bar.dto';
import { UpdateLifecycleBarDto } from './dto/update-lifecycle-bar.dto';

@Injectable()
export class LifecycleBarService
  implements OnModuleInit, OnApplicationBootstrap
{
  onModuleInit() {
    console.log('service: lifecycle-foo onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('service: lifecycle-foo onApplicationBootstrap');
  }
  create(createLifecycleBarDto: CreateLifecycleBarDto) {
    return 'This action adds a new lifecycleBar';
  }

  findAll() {
    return `This action returns all lifecycleBar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lifecycleBar`;
  }

  update(id: number, updateLifecycleBarDto: UpdateLifecycleBarDto) {
    return `This action updates a #${id} lifecycleBar`;
  }

  remove(id: number) {
    return `This action removes a #${id} lifecycleBar`;
  }
}
