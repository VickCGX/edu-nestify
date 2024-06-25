import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../../prisma/prisma.service'
import { QuizQuestionDto } from './dtos/quiz-question.dto'
import { CreateQuizQuestionDto } from './dtos/create-quiz-question.dto'
import { UpdateQuizQuestionDto } from './dtos/update-quiz-question.dto'

const include = {}
@Injectable()
export class QuizQuestionService extends BaseService<QuizQuestionDto, CreateQuizQuestionDto, UpdateQuizQuestionDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'quiz_questions', include)
  }
}
