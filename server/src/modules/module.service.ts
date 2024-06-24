import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { ModuleDto } from './dtos/module.dto'
import { CreateModuleDto } from './dtos/create-module.dto'
import { UpdateModuleDto } from './dtos/update-module.dto'

const include = {}

@Injectable()
export class ModuleService extends BaseService<ModuleDto, CreateModuleDto, UpdateModuleDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'modules', include)
  }
}
