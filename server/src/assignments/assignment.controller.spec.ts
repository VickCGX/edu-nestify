import { Test, TestingModule } from '@nestjs/testing'
import { AssignmentController } from './assignment.controller'

describe('AssignmentController', () => {
  let controller: AssignmentController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentController]
    }).compile()

    controller = module.get<AssignmentController>(AssignmentController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
