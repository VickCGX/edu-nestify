import { Test, TestingModule } from '@nestjs/testing'
import { QuizCorrectAnswerController } from './quiz-correct-answer.controller'
import { QuizCorrectAnswerService } from './quiz-correct-answer.service'

describe('QuizCorrectAnswerController', () => {
  let controller: QuizCorrectAnswerController
  let service: QuizCorrectAnswerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizCorrectAnswerController],
      providers: [
        {
          provide: QuizCorrectAnswerService,
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

    controller = module.get<QuizCorrectAnswerController>(QuizCorrectAnswerController)
    service = module.get<QuizCorrectAnswerService>(QuizCorrectAnswerService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
