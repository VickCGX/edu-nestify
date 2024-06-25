import { Module } from '@nestjs/common'
import { QuizCorrectAnswerService } from './quiz-correct-answer.service'
import { QuizCorrectAnswerController } from './quiz-correct-answer.controller'
import { PrismaService } from '../../../prisma/prisma.service'

@Module({
  providers: [QuizCorrectAnswerService, PrismaService],
  controllers: [QuizCorrectAnswerController]
})
export class QuizCorrectAnswerModule {}
