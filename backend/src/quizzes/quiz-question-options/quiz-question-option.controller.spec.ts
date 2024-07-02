import { Test, TestingModule } from '@nestjs/testing'
import { QuizQuestionOptionController } from './quiz-question-option.controller'
import { QuizQuestionOptionService } from './quiz-question-option.service'

describe('QuizQuestionOptionController', () => {
  let controller: QuizQuestionOptionController
  let service: QuizQuestionOptionService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizQuestionOptionController],
      providers: [
        {
          provide: QuizQuestionOptionService,
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

    controller = module.get<QuizQuestionOptionController>(QuizQuestionOptionController)
    service = module.get<QuizQuestionOptionService>(QuizQuestionOptionService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
