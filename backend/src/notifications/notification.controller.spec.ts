import { Test, TestingModule } from '@nestjs/testing'
import { NotificationController } from './notification.controller'
import { NotificationService } from './notification.service'

describe('NotificationController', () => {
  let controller: NotificationController
  let service: NotificationService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [
        {
          provide: NotificationService,
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

    controller = module.get<NotificationController>(NotificationController)
    service = module.get<NotificationService>(NotificationService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
