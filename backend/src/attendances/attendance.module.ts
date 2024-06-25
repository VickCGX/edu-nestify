import { Module } from '@nestjs/common'
import { AttendanceService } from './attendance.service'
import { AttendanceController } from './attendance.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [AttendanceService, PrismaService],
  controllers: [AttendanceController]
})
export class AttendanceModule {}
