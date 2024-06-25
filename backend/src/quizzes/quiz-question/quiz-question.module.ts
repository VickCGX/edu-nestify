import { Module } from '@nestjs/common'
import { QuizQuestionService } from './quiz-question.service'
import { QuizQuestionController } from './quiz-question.controller'
import { PrismaService } from '../../../prisma/prisma.service'

@Module({
  providers: [QuizQuestionService, PrismaService],
  controllers: [QuizQuestionController]
})
export class QuizQuestionModule {}
