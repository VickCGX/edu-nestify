import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from '../../../prisma/prisma.service'
import { MaterialService } from './material.service'

describe('MaterialService', () => {
  let service: MaterialService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaterialService,
        {
          provide: PrismaService,
          useValue: {
            class: {
              findUnique: jest.fn(),
              findMany: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn()
            }
          }
        }
      ]
    }).compile()

    service = module.get<MaterialService>(MaterialService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
