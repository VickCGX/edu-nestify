import { Test, TestingModule } from '@nestjs/testing'
import { ModuleController } from './feedback.controller'

describe('ModuleController', () => {
  let controller: ModuleController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleController]
    }).compile()

    controller = module.get<ModuleController>(ModuleController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
