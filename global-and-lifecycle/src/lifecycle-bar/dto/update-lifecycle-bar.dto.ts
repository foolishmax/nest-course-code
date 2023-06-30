import { PartialType } from '@nestjs/mapped-types';
import { CreateLifecycleBarDto } from './create-lifecycle-bar.dto';

export class UpdateLifecycleBarDto extends PartialType(CreateLifecycleBarDto) {}
