import { Test, TestingModule } from '@nestjs/testing'
import { QuizController } from './quiz.controller'
import { QuizService } from './quiz.service'

describe('QuizController', () => {
  let controller: QuizController
  let service: QuizService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizController],
      providers: [
        {
          provide: QuizService,
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

    controller = module.get<QuizController>(QuizController)
    service = module.get<QuizService>(QuizService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
