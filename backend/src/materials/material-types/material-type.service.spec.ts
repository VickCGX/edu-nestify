import { Test, TestingModule } from '@nestjs/testing'
import { MaterialTypeService } from './material-type.service'

describe('MaterialTypeService', () => {
  let service: MaterialTypeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterialTypeService]
    }).compile()

    service = module.get<MaterialTypeService>(MaterialTypeService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
