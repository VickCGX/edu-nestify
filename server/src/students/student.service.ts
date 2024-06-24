import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { StudentDto } from './dtos/student.dto'
import { CreateStudentDto } from './dtos/create-student.dto'
import { UpdateStudentDto } from './dtos/update-student.dto'

const include = {
  classes: true
}

@Injectable()
export class StudentService extends BaseService<StudentDto, CreateStudentDto, UpdateStudentDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'students', include)
  }
}
