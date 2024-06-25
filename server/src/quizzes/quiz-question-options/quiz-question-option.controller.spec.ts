import { Test, TestingModule } from '@nestjs/testing'
import { QuizQuestionOptionController } from './quiz-question-option.controller'

describe('QuizQuestionOptionController', () => {
  let controller: QuizQuestionOptionController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizQuestionOptionController]
    }).compile()

    controller = module.get<QuizQuestionOptionController>(QuizQuestionOptionController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
