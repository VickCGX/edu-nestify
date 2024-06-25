import { Test, TestingModule } from '@nestjs/testing'
import { QuizQuestionController } from './quiz-question.controller'

describe('QuizQuestionController', () => {
  let controller: QuizQuestionController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizQuestionController]
    }).compile()

    controller = module.get<QuizQuestionController>(QuizQuestionController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
