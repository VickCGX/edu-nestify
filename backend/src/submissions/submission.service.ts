import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { SubmissionDto } from './dtos/submission.dto'
import { CreateSubmissionDto } from './dtos/create-submission.dto'
import { UpdateSubmissionDto } from './dtos/update-submission.dto'

const include = {
  student: true,
  assignment: true
}

@Injectable()
export class SubmissionService extends BaseService<SubmissionDto, CreateSubmissionDto, UpdateSubmissionDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'submissions', include)
  }
}
