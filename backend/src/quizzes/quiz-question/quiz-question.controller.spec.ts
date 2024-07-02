import { Test, TestingModule } from '@nestjs/testing'
import { QuizQuestionController } from './quiz-question.controller'
import { QuizQuestionService } from './quiz-question.service'

describe('QuizQuestionController', () => {
  let controller: QuizQuestionController
  let service: QuizQuestionService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizQuestionController],
      providers: [
        {
          provide: QuizQuestionService,
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

    controller = module.get<QuizQuestionController>(QuizQuestionController)
    service = module.get<QuizQuestionService>(QuizQuestionService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
