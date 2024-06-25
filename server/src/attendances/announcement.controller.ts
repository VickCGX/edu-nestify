import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AnnouncementService } from './announcement.service'
import { CreateAnnouncementDto } from './dtos/create-announcement.dto'
import { UpdateAnnouncementDto } from './dtos/update-announcement.dto'
import { AnnouncementDto } from './dtos/announcement.dto'
import {
  ApiResponseModel,
  ApiResponseArrayModel,
  ApiOperationSummary,
  ApiQueryOptions,
  HttpStatusCode,
  FilterDto,
  PaginationDto,
  SortDto,
  PaginationResponse
} from 'src/shared'

@ApiTags('announcements')
@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create announcement')
  @ApiResponseModel(AnnouncementDto, HttpStatus.CREATED)
  async create(@Body() createAnnouncementDto: CreateAnnouncementDto): Promise<AnnouncementDto> {
    return this.announcementService.create(createAnnouncementDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get announcement by ID')
  @ApiResponseModel(AnnouncementDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<AnnouncementDto> {
    return this.announcementService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many announcements')
  @ApiQueryOptions()
  @ApiResponseArrayModel(AnnouncementDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<AnnouncementDto>> {
    return this.announcementService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update announcement')
  @ApiResponseModel(AnnouncementDto, HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto
  ): Promise<AnnouncementDto> {
    return this.announcementService.update(id, updateAnnouncementDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete an announcement')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.announcementService.remove(id)
  }
}
