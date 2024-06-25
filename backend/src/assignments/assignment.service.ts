import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { AssignmentDto } from './dtos/assignment.dto'
import { CreateAssignmentDto } from './dtos/create-assignment.dto'
import { UpdateAssignmentDto } from './dtos/update-assignment.dto'

const include = {
  submissions: true,
  class: true
}

@Injectable()
export class AssignmentService extends BaseService<AssignmentDto, CreateAssignmentDto, UpdateAssignmentDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'assignments', include)
  }
}
