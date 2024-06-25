import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { NotificationDto } from './dtos/notification.dto'
import { CreateNotificationDto } from './dtos/create-notification.dto'
import { UpdateNotificationDto } from './dtos/update-notification.dto'

const include = {
  recipient: true
}

@Injectable()
export class NotificationService extends BaseService<NotificationDto, CreateNotificationDto, UpdateNotificationDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'notifications', include)
  }
}
