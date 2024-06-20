import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './users/users.module'
import { PrismaModule } from '../prisma/prisma.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), UserModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
