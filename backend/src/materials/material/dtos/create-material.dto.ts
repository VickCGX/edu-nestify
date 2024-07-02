import { OmitType } from '@nestjs/swagger'
import { MaterialDto } from './material.dto'

export class CreateMaterialDto extends OmitType(MaterialDto, ['id', 'createdAt', 'updatedAt'] as const) {}
