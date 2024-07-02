import { Test, TestingModule } from '@nestjs/testing'
import { ScoreController } from './score.controller'
import { ScoreService } from './score.service'

describe('ScoreController', () => {
  let controller: ScoreController
  let service: ScoreService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoreController],
      providers: [
        {
          provide: ScoreService,
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue({}),
            remove: jest.fn().mockResolvedValue({})
          }
        }
      ]
    }).compile()

    controller = module.get<ScoreController>(ScoreController)
    service = module.get<ScoreService>(ScoreService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
