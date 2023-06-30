import { PartialType } from '@nestjs/mapped-types';
import { CreateLifecycleFooDto } from './create-lifecycle-foo.dto';

export class UpdateLifecycleFooDto extends PartialType(CreateLifecycleFooDto) {}
