import { Test, TestingModule } from '@nestjs/testing'
import { QuestionTypeService } from './question-type.service'

describe('QuestionTypeService', () => {
  let service: QuestionTypeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionTypeService]
    }).compile()

    service = module.get<QuestionTypeService>(QuestionTypeService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
