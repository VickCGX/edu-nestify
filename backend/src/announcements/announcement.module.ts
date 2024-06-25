import { Module } from '@nestjs/common'
import { AnnouncementService } from './announcement.service'
import { AnnouncementController } from './announcement.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [AnnouncementService, PrismaService],
  controllers: [AnnouncementController]
})
export class AnnouncementModule {}
