import { Module } from '@nestjs/common'
import { ScoreService } from './score.service'
import { ScoreController } from './score.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [ScoreService, PrismaService],
  controllers: [ScoreController]
})
export class ScoreModule {}
