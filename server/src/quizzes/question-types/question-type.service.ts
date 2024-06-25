import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../../prisma/prisma.service'
import { QuestionTypeDto } from './dtos/question-type.dto'
import { CreateQuestionTypeDto } from './dtos/create-question-type.dto'
import { UpdateQuestionTypeDto } from './dtos/update-question-type.dto'

const include = {}

@Injectable()
export class QuestionTypeService extends BaseService<QuestionTypeDto, CreateQuestionTypeDto, UpdateQuestionTypeDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'question_types', include)
  }
}
