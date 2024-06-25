import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { QuizQuestionService } from './quiz-question.service'
import { CreateQuizQuestionDto } from './dtos/create-quiz-question.dto'
import { UpdateQuizQuestionDto } from './dtos/update-quiz-question.dto'
import { QuizQuestionDto } from './dtos/quiz-question.dto'
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

@ApiTags('quiz-questions')
@Controller('quiz-questions')
export class QuizQuestionController {
  constructor(private readonly quizQuestionService: QuizQuestionService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create quiz question')
  @ApiResponseModel(QuizQuestionDto, HttpStatus.CREATED)
  async create(@Body() createQuizQuestionDto: CreateQuizQuestionDto): Promise<QuizQuestionDto> {
    return this.quizQuestionService.create(createQuizQuestionDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get quiz question by ID')
  @ApiResponseModel(QuizQuestionDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<QuizQuestionDto> {
    return this.quizQuestionService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many quiz questions')
  @ApiQueryOptions()
  @ApiResponseArrayModel(QuizQuestionDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<QuizQuestionDto>> {
    return this.quizQuestionService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update quiz question')
  @ApiResponseModel(QuizQuestionDto, HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() updateQuizQuestionDto: UpdateQuizQuestionDto
  ): Promise<QuizQuestionDto> {
    return this.quizQuestionService.update(id, updateQuizQuestionDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a quiz question')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.quizQuestionService.remove(id)
  }
}
