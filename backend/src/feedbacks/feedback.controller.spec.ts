import { Test, TestingModule } from '@nestjs/testing'
import { FeedbackController } from './feedback.controller'
import { FeedbackService } from './feedback.service'

describe('FeedbackController', () => {
  let controller: FeedbackController
  let service: FeedbackService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedbackController],
      providers: [
        {
          provide: FeedbackService,
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

    controller = module.get<FeedbackController>(FeedbackController)
    service = module.get<FeedbackService>(FeedbackService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
