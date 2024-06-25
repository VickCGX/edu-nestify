import { Module } from '@nestjs/common'
import { QuestionTypeService } from './question-type.service'
import { QuestionTypeController } from './question-type.controller'
import { PrismaService } from '../../../prisma/prisma.service'

@Module({
  providers: [QuestionTypeService, PrismaService],
  controllers: [QuestionTypeController]
})
export class QuestionTypeModule {}
