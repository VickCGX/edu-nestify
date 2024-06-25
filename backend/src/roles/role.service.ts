import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { RoleDto } from './dtos/role.dto'
import { CreateRoleDto } from './dtos/create-role.dto'
import { UpdateRoleDto } from './dtos/update-role.dto'

const include = {}
@Injectable()
export class RoleService extends BaseService<RoleDto, CreateRoleDto, UpdateRoleDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'roles', include)
  }
}
