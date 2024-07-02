import { Test, TestingModule } from '@nestjs/testing'
import { RoleController } from './role.controller'
import { RoleService } from './role.service'

describe('RoleController', () => {
  let controller: RoleController
  let service: RoleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [
        {
          provide: RoleService,
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

    controller = module.get<RoleController>(RoleController)
    service = module.get<RoleService>(RoleService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
