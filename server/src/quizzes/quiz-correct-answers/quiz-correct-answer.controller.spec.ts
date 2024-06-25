import { Test, TestingModule } from '@nestjs/testing'
import { QuizCorrectAnswerController } from './quiz-correct-answer.controller'

describe('QuizCorrectAnswerController', () => {
  let controller: QuizCorrectAnswerController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizCorrectAnswerController]
    }).compile()

    controller = module.get<QuizCorrectAnswerController>(QuizCorrectAnswerController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
