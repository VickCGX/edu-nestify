import { Test, TestingModule } from '@nestjs/testing'
import { MaterialController } from './material.controller'
import { MaterialService } from './material.service'

describe('MaterialController', () => {
  let controller: MaterialController
  let service: MaterialService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialController],
      providers: [
        {
          provide: MaterialService,
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

    controller = module.get<MaterialController>(MaterialController)
    service = module.get<MaterialService>(MaterialService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
