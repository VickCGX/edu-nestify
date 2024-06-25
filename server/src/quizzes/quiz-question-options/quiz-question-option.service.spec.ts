import { Test, TestingModule } from '@nestjs/testing'
import { QuizQuestionOptionService } from './quiz-question-option.service'

describe('QuizQuestionOptionService', () => {
  let service: QuizQuestionOptionService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizQuestionOptionService]
    }).compile()

    service = module.get<QuizQuestionOptionService>(QuizQuestionOptionService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
