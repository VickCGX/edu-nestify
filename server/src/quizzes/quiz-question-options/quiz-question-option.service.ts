import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../../prisma/prisma.service'
import { QuizQuestionOptionDto } from './dtos/quiz-question-option.dto'
import { CreateQuizQuestionOptionDto } from './dtos/create-quiz-question-option.dto'
import { UpdateQuizQuestionOptionDto } from './dtos/update-quiz-question-option.dto'

const include = {}

@Injectable()
export class QuizQuestionOptionService extends BaseService<
  QuizQuestionOptionDto,
  CreateQuizQuestionOptionDto,
  UpdateQuizQuestionOptionDto
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'quiz_question_options', include)
  }
}
