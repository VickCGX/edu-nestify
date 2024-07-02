import { Test, TestingModule } from '@nestjs/testing'
import { MaterialTypeController } from './material-type.controller'
import { MaterialTypeService } from './material-type.service'

describe('MaterialTypeController', () => {
  let controller: MaterialTypeController
  let service: MaterialTypeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialTypeController],
      providers: [
        {
          provide: MaterialTypeService,
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

    controller = module.get<MaterialTypeController>(MaterialTypeController)
    service = module.get<MaterialTypeService>(MaterialTypeService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
