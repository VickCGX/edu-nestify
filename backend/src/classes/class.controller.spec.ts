import { Test, TestingModule } from '@nestjs/testing'
import { ClassController } from './class.controller'
import { ClassService } from './class.service'

describe('ClassController', () => {
  let controller: ClassController
  let service: ClassService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassController],
      providers: [
        {
          provide: ClassService,
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

    controller = module.get<ClassController>(ClassController)
    service = module.get<ClassService>(ClassService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
