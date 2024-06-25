import { Module } from '@nestjs/common'
import { QuizQuestionOptionService } from './quiz-question-option.service'
import { QuizQuestionOptionController } from './quiz-question-option.controller'
import { PrismaService } from '../../../prisma/prisma.service'

@Module({
  providers: [QuizQuestionOptionService, PrismaService],
  controllers: [QuizQuestionOptionController]
})
export class QuizQuestionOptionModule {}
