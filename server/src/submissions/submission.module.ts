import { Module } from '@nestjs/common'
import { SubmissionService } from './submission.service'
import { SubmissionController } from './submission.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [SubmissionService, PrismaService],
  controllers: [SubmissionController]
})
export class SubmissionModule {}
