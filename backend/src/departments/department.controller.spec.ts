import { Test, TestingModule } from '@nestjs/testing'
import { DepartmentController } from './department.controller'
import { DepartmentService } from './department.service'

describe('DepartmentController', () => {
  let controller: DepartmentController
  let service: DepartmentService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentController],
      providers: [
        {
          provide: DepartmentService,
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

    controller = module.get<DepartmentController>(DepartmentController)
    service = module.get<DepartmentService>(DepartmentService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
