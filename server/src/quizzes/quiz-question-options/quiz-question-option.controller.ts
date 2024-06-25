import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { QuizQuestionOptionService } from './quiz-question-option.service'
import { CreateQuizQuestionOptionDto } from './dtos/create-quiz-question-option.dto'
import { UpdateQuizQuestionOptionDto } from './dtos/update-quiz-question-option.dto'
import { QuizQuestionOptionDto } from './dtos/quiz-question-option.dto'
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

@ApiTags('quiz-question-options')
@Controller('quiz-question-options')
export class QuizQuestionOptionController {
  constructor(private readonly quizQuestionOptionService: QuizQuestionOptionService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create quiz question option')
  @ApiResponseModel(QuizQuestionOptionDto, HttpStatus.CREATED)
  async create(@Body() createQuizQuestionOptionDto: CreateQuizQuestionOptionDto): Promise<QuizQuestionOptionDto> {
    return this.quizQuestionOptionService.create(createQuizQuestionOptionDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get quiz question option by ID')
  @ApiResponseModel(QuizQuestionOptionDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<QuizQuestionOptionDto> {
    return this.quizQuestionOptionService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many quiz question options')
  @ApiQueryOptions()
  @ApiResponseArrayModel(QuizQuestionOptionDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<QuizQuestionOptionDto>> {
    return this.quizQuestionOptionService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update quiz question option')
  @ApiResponseModel(QuizQuestionOptionDto, HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() updateQuizQuestionOptionDto: UpdateQuizQuestionOptionDto
  ): Promise<QuizQuestionOptionDto> {
    return this.quizQuestionOptionService.update(id, updateQuizQuestionOptionDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a quiz question option')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.quizQuestionOptionService.remove(id)
  }
}
