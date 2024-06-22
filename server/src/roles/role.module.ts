import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [RoleService, PrismaService],
  controllers: [RoleController]
})
export class RoleModule {}
