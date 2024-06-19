import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), UsersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
