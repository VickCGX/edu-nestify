import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { SubjectDto } from './dtos/subject.dto'
import { CreateSubjectDto } from './dtos/create-subject.dto'
import { UpdateSubjectDto } from './dtos/update-subject.dto'

const include = {}
@Injectable()
export class SubjectService extends BaseService<SubjectDto, CreateSubjectDto, UpdateSubjectDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'subjects', include)
  }
}
