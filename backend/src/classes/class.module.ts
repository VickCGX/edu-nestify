import { Module } from '@nestjs/common'
import { ClassService } from './class.service'
import { ClassController } from './class.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [ClassService, PrismaService],
  controllers: [ClassController]
})
export class ClassModule {}
