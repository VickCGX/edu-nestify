import { Test, TestingModule } from '@nestjs/testing'
import { AnnouncementService } from './announcement.service'
import { PrismaService } from '../../prisma/prisma.service'

describe('AnnouncementService', () => {
  let service: AnnouncementService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnnouncementService,
        {
          provide: PrismaService,
          useValue: {
            announcement: {
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

    service = module.get<AnnouncementService>(AnnouncementService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
