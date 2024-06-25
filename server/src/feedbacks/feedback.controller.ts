import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { FeedbackService } from './feedback.service'
import { CreateFeedbackDto } from './dtos/create-feedback.dto'
import { UpdateFeedbackDto } from './dtos/update-feedback.dto'
import { FeedbackDto } from './dtos/feedback.dto'
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

@ApiTags('feedbacks')
@Controller('feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create feedback')
  @ApiResponseModel(FeedbackDto, HttpStatus.CREATED)
  async create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<FeedbackDto> {
    return this.feedbackService.create(createFeedbackDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get feedback by ID')
  @ApiResponseModel(FeedbackDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<FeedbackDto> {
    return this.feedbackService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many feedbacks')
  @ApiQueryOptions()
  @ApiResponseArrayModel(FeedbackDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<FeedbackDto>> {
    return this.feedbackService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update feedback')
  @ApiResponseModel(FeedbackDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateFeedbackDto: UpdateFeedbackDto): Promise<FeedbackDto> {
    return this.feedbackService.update(id, updateFeedbackDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a feedback')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.feedbackService.remove(id)
  }
}
