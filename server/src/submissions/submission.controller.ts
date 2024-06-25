import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { SubmissionService } from './submission.service'
import { CreateSubmissionDto } from './dtos/create-submission.dto'
import { UpdateSubmissionDto } from './dtos/update-submission.dto'
import { SubmissionDto } from './dtos/submission.dto'
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

@ApiTags('submissions')
@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create submission')
  @ApiResponseModel(SubmissionDto, HttpStatus.CREATED)
  async create(@Body() createSubmissionDto: CreateSubmissionDto): Promise<SubmissionDto> {
    return this.submissionService.create(createSubmissionDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get submission by ID')
  @ApiResponseModel(SubmissionDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<SubmissionDto> {
    return this.submissionService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many submissions')
  @ApiQueryOptions()
  @ApiResponseArrayModel(SubmissionDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<SubmissionDto>> {
    return this.submissionService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update submission')
  @ApiResponseModel(SubmissionDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateSubmissionDto: UpdateSubmissionDto): Promise<SubmissionDto> {
    return this.submissionService.update(id, updateSubmissionDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a submission')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.submissionService.remove(id)
  }
}
