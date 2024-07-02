import { Test, TestingModule } from '@nestjs/testing'
import { TeacherController } from './teacher.controller'
import { TeacherService } from './teacher.service'

describe('TeacherController', () => {
  let controller: TeacherController
  let service: TeacherService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherController],
      providers: [
        {
          provide: TeacherService,
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

    controller = module.get<TeacherController>(TeacherController)
    service = module.get<TeacherService>(TeacherService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
