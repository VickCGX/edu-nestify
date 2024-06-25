import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../../prisma/prisma.service'
import { QuizDto } from './dtos/quiz.dto'
import { CreateQuizDto } from './dtos/create-quiz.dto'
import { UpdateQuizDto } from './dtos/update-quiz.dto'

const include = {
  questions: true,
  class: true
}

@Injectable()
export class QuizService extends BaseService<QuizDto, CreateQuizDto, UpdateQuizDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'quizzes', include)
  }
}
