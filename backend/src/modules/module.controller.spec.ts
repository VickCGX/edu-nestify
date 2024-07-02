import { Test, TestingModule } from '@nestjs/testing'
import { ModuleController } from './module.controller'
import { ModuleService } from './module.service'

describe('ModuleController', () => {
  let controller: ModuleController
  let service: ModuleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleController],
      providers: [
        {
          provide: ModuleService,
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

    controller = module.get<ModuleController>(ModuleController)
    service = module.get<ModuleService>(ModuleService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
