import { Test, TestingModule } from '@nestjs/testing'
import { AnnouncementController } from './announcement.controller'
import { AnnouncementService } from './announcement.service'

describe('AnnouncementController', () => {
  let controller: AnnouncementController
  let service: AnnouncementService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnouncementController],
      providers: [
        {
          provide: AnnouncementService,
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

    controller = module.get<AnnouncementController>(AnnouncementController)
    service = module.get<AnnouncementService>(AnnouncementService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
