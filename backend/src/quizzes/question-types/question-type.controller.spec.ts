import { Test, TestingModule } from '@nestjs/testing'
import { QuestionTypeController } from './question-type.controller'
import { QuestionTypeService } from './question-type.service'

describe('QuestionTypeController', () => {
  let controller: QuestionTypeController
  let service: QuestionTypeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionTypeController],
      providers: [
        {
          provide: QuestionTypeService,
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

    controller = module.get<QuestionTypeController>(QuestionTypeController)
    service = module.get<QuestionTypeService>(QuestionTypeService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
