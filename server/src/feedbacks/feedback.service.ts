import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { FeedbackDto } from './dtos/feedback.dto'
import { CreateFeedbackDto } from './dtos/create-feedback.dto'
import { UpdateFeedbackDto } from './dtos/update-feedback.dto'

const include = {
  assignment: true,
  quiz: true,
  student: true,
  teacher: true
}

@Injectable()
export class FeedbackService extends BaseService<FeedbackDto, CreateFeedbackDto, UpdateFeedbackDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'feedbacks', include)
  }
}
