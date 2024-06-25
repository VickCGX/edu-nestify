import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { ClassDto } from './dtos/class.dto'
import { CreateClassDto } from './dtos/create-class.dto'
import { UpdateClassDto } from './dtos/update-class.dto'

const include = {
  teacher: true,
  students: true
}

@Injectable()
export class ClassService extends BaseService<ClassDto, CreateClassDto, UpdateClassDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'classes', include)
  }
}
