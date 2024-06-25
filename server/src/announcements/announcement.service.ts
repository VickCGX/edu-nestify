import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { AnnouncementDto } from './dtos/announcement.dto'
import { CreateAnnouncementDto } from './dtos/create-announcement.dto'
import { UpdateAnnouncementDto } from './dtos/update-announcement.dto'

const include = {
  class: true
}

@Injectable()
export class AnnouncementService extends BaseService<AnnouncementDto, CreateAnnouncementDto, UpdateAnnouncementDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'announcements', include)
  }
}
