import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import { SubjectService } from './subject.service'
import { CreateSubjectDto } from './dtos/create-subject.dto'
import { UpdateSubjectDto } from './dtos/update-subject.dto'
import { SubjectDto } from './dtos/subject.dto'
import {
  ApiResponseModel,
  ApiOperationSummary,
  ApiQueryOptions,
  HttpStatusCode,
  FilterDto,
  PaginationDto,
  SortDto,
  PaginationResponse
} from 'src/shared'

@ApiTags('subjects')
@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create subject')
  @ApiResponseModel(SubjectDto, HttpStatus.CREATED)
  async create(@Body() createSubjectDto: CreateSubjectDto): Promise<SubjectDto> {
    return this.subjectService.create(createSubjectDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get subject by ID')
  @ApiResponseModel(SubjectDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<SubjectDto> {
    return this.subjectService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many subjects')
  @ApiQueryOptions()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return many subjects.',
    type: () => PaginationResponse<SubjectDto>
  })
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<SubjectDto>> {
    return this.subjectService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update subject')
  @ApiResponseModel(SubjectDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateSubjectDto: UpdateSubjectDto): Promise<SubjectDto> {
    return this.subjectService.update(id, updateSubjectDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a subject')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.subjectService.remove(id)
  }
}
