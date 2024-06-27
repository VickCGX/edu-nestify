import { Test, TestingModule } from '@nestjs/testing'
import { MaterialTypeController } from './material-type.controller'

describe('MaterialTypeController', () => {
  let controller: MaterialTypeController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialTypeController]
    }).compile()

    controller = module.get<MaterialTypeController>(MaterialTypeController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
