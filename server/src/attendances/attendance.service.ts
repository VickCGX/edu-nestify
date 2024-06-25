import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { AttendanceDto } from './dtos/attendance.dto'
import { CreateAttendanceDto } from './dtos/create-attendance.dto'
import { UpdateAttendanceDto } from './dtos/update-attendance.dto'

const include = {
  student: true,
  class: true
}

@Injectable()
export class AttendanceService extends BaseService<AttendanceDto, CreateAttendanceDto, UpdateAttendanceDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'attendance', include)
  }
}
