import { Test, TestingModule } from '@nestjs/testing'
import { AttendanceController } from './attendance.controller'
import { AttendanceService } from './attendance.service'

describe('AttendanceController', () => {
  let controller: AttendanceController
  let service: AttendanceService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendanceController],
      providers: [
        {
          provide: AttendanceService,
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

    controller = module.get<AttendanceController>(AttendanceController)
    service = module.get<AttendanceService>(AttendanceService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
