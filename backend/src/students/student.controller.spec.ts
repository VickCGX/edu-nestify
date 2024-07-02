import { Test, TestingModule } from '@nestjs/testing'
import { StudentController } from './student.controller'
import { StudentService } from './student.service'

describe('StudentController', () => {
  let controller: StudentController
  let service: StudentService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        {
          provide: StudentService,
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

    controller = module.get<StudentController>(StudentController)
    service = module.get<StudentService>(StudentService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
