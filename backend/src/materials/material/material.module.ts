import { Module } from '@nestjs/common'
import { PrismaService } from '../../../prisma/prisma.service'
import { MaterialService } from './material.service'
import { MaterialController } from './material.controller'

@Module({
  providers: [PrismaService, MaterialService],
  controllers: [MaterialController]
})
export class MaterialModule {}
