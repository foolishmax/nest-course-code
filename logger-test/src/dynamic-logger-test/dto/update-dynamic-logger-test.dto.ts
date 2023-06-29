import { PartialType } from '@nestjs/mapped-types';
import { CreateDynamicLoggerTestDto } from './create-dynamic-logger-test.dto';

export class UpdateDynamicLoggerTestDto extends PartialType(CreateDynamicLoggerTestDto) {}
