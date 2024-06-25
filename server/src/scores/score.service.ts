import { Injectable } from '@nestjs/common'
import { BaseService } from 'src/shared'
import { PrismaService } from '../../prisma/prisma.service'
import { ScoreDto } from './dtos/score.dto'
import { CreateScoreDto } from './dtos/create-score.dto'
import { UpdateScoreDto } from './dtos/update-score.dto'

const include = {
  student: true,
  quiz: true
}

@Injectable()
export class ScoreService extends BaseService<ScoreDto, CreateScoreDto, UpdateScoreDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'scores', include)
  }
}
