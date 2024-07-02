import { Test, TestingModule } from '@nestjs/testing'
import { SubjectController } from './subject.controller'
import { SubjectService } from './subject.service'

describe('SubjectController', () => {
  let controller: SubjectController
  let service: SubjectService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectController],
      providers: [
        {
          provide: SubjectService,
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

    controller = module.get<SubjectController>(SubjectController)
    service = module.get<SubjectService>(SubjectService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
