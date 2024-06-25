import { Module } from '@nestjs/common'
import { FeedbackService } from './feedback.service'
import { FeedbackController } from './feedback.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [FeedbackService, PrismaService],
  controllers: [FeedbackController]
})
export class FeedbackModule {}
