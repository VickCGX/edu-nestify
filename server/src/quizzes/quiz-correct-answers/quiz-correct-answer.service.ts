import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../../prisma/prisma.service'
import { QuizCorrectAnswerDto } from './dtos/quiz-correct-answer.dto'
import { CreateQuizCorrectAnswerDto } from './dtos/create-quiz-correct-answer.dto'
import { UpdateQuizCorrectAnswerDto } from './dtos/update-quiz-correct-answer.dto'

const include = {
  quizQuestion: true
}

@Injectable()
export class QuizCorrectAnswerService extends BaseService<
  QuizCorrectAnswerDto,
  CreateQuizCorrectAnswerDto,
  UpdateQuizCorrectAnswerDto
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'quiz_correct_answers', include)
  }
}
