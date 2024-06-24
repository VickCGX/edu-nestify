import { Module } from '@nestjs/common'
import { TeacherService } from './teacher.service'
import { TeacherController } from './teacher.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [TeacherService, PrismaService],
  controllers: [TeacherController]
})
export class TeacherModule {}
