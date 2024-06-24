import { Module } from '@nestjs/common'
import { SubjectService } from './subject.service'
import { SubjectController } from './subject.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [SubjectService, PrismaService],
  controllers: [SubjectController]
})
export class SubjectModule {}
