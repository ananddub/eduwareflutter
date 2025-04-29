import { PartialType } from '@nestjs/mapped-types';
import { CreateAdmisionDto } from './create-admision.dto';

export class UpdateAdmisionDto extends PartialType(CreateAdmisionDto) {}
