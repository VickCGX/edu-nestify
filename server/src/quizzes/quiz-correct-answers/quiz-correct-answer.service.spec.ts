import { Test, TestingModule } from '@nestjs/testing'
import { QuizCorrectAnswerService } from './quiz-correct-answer.service'

describe('QuizCorrectAnswerService', () => {
  let service: QuizCorrectAnswerService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizCorrectAnswerService]
    }).compile()

    service = module.get<QuizCorrectAnswerService>(QuizCorrectAnswerService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
