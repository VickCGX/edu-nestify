import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { TimetableDto } from './dtos/timetable.dto'
import { CreateTimetableDto } from './dtos/create-timetable.dto'
import { UpdateTimetableDto } from './dtos/update-timetable.dto'

const include = {
  class: true,
  subject: true
}

@Injectable()
export class TimetableService extends BaseService<TimetableDto, CreateTimetableDto, UpdateTimetableDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'timetables', include)
  }
}
