import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { QuestionTypeService } from './question-type.service'
import { CreateQuestionTypeDto } from './dtos/create-question-type.dto'
import { UpdateQuestionTypeDto } from './dtos/update-question-type.dto'
import { QuestionTypeDto } from './dtos/question-type.dto'
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

@ApiTags('question-types')
@Controller('question-types')
export class QuestionTypeController {
  constructor(private readonly questionTypeService: QuestionTypeService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create question type')
  @ApiResponseModel(QuestionTypeDto, HttpStatus.CREATED)
  async create(@Body() createQuestionTypeDto: CreateQuestionTypeDto): Promise<QuestionTypeDto> {
    return this.questionTypeService.create(createQuestionTypeDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get question type by ID')
  @ApiResponseModel(QuestionTypeDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<QuestionTypeDto> {
    return this.questionTypeService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many question types')
  @ApiQueryOptions()
  @ApiResponseArrayModel(QuestionTypeDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<QuestionTypeDto>> {
    return this.questionTypeService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update question type')
  @ApiResponseModel(QuestionTypeDto, HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() updateQuestionTypeDto: UpdateQuestionTypeDto
  ): Promise<QuestionTypeDto> {
    return this.questionTypeService.update(id, updateQuestionTypeDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a question type')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.questionTypeService.remove(id)
  }
}
