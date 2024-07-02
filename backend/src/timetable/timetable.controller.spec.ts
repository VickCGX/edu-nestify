import { Test, TestingModule } from '@nestjs/testing'
import { TimetableController } from './timetable.controller'
import { TimetableService } from './timetable.service'

describe('TeacherController', () => {
  let controller: TimetableController
  let service: TimetableService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimetableController],
      providers: [
        {
          provide: TimetableService,
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

    controller = module.get<TimetableController>(TimetableController)
    service = module.get<TimetableService>(TimetableService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
