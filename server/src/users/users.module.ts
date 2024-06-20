import { Module } from '@nestjs/common'
import { UserService } from './users.service'
import { UserController } from './users.controller'
import { PrismaModule } from '../../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
