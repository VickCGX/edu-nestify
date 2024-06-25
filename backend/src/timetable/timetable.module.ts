import { Module } from '@nestjs/common'
import { TimetableService } from './timetable.service'
import { TimetableController } from './timetable.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [TimetableService, PrismaService],
  controllers: [TimetableController]
})
export class TimetableModule {}
