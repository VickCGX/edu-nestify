import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../../prisma/prisma.service'
import { MaterialTypeDto } from './dtos/material-type.dto'
import { CreateMaterialTypeDto } from './dtos/create-material-type.dto'
import { UpdateMaterialTypeDto } from './dtos/update-material-type.dto'

const include = {}

@Injectable()
export class MaterialTypeService extends BaseService<MaterialTypeDto, CreateMaterialTypeDto, UpdateMaterialTypeDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'material_types', include)
  }
}
