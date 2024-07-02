import { Test, TestingModule } from '@nestjs/testing'
import { AssignmentController } from './assignment.controller'
import { AssignmentService } from './assignment.service'

describe('AssignmentController', () => {
  let controller: AssignmentController
  let service: AssignmentService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentController],
      providers: [
        {
          provide: AssignmentService,
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

    controller = module.get<AssignmentController>(AssignmentController)
    service = module.get<AssignmentService>(AssignmentService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
