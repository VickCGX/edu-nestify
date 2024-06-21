import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { DepartmentDto } from './dtos/department.dto'
import { CreateDepartmentDto } from './dtos/create-department.dto'
import { UpdateDepartmentDto } from './dtos/update-department.dto'

const include = {}
@Injectable()
export class DepartmentService extends BaseService<DepartmentDto, CreateDepartmentDto, UpdateDepartmentDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'departments', include)
  }
}
