import { Module } from '@nestjs/common'
import { MaterialTypeService } from './material-type.service'
import { MaterialTypeController } from './material-type.controller'
import { PrismaService } from '../../../prisma/prisma.service'

@Module({
  providers: [MaterialTypeService, PrismaService],
  controllers: [MaterialTypeController]
})
export class MaterialTypeModule {}
