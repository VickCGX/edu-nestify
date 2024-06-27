import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../../prisma/prisma.service'
import { MaterialDto } from './dtos/material.dto'
import { CreateMaterialDto } from './dtos/create-material.dto'
import { UpdateMaterialDto } from './dtos/update-material.dto'

const include = {}

@Injectable()
export class MaterialService extends BaseService<MaterialDto, CreateMaterialDto, UpdateMaterialDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'materials', include)
  }
}
