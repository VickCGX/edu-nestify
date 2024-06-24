import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { TeacherDto } from './dtos/teacher.dto'
import { CreateTeacherDto } from './dtos/create-teacher.dto'
import { UpdateTeacherDto } from './dtos/update-teacher.dto'

const include = {
  subjects: true,
  classes: true,
  department: true
}

@Injectable()
export class TeacherService extends BaseService<TeacherDto, CreateTeacherDto, UpdateTeacherDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'teachers', include)
  }
}
