import { Module } from '@nestjs/common'
import { AssignmentService } from './assignment.service'
import { AssignmentController } from './assignment.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [AssignmentService, PrismaService],
  controllers: [AssignmentController]
})
export class AssignmentModule {}
