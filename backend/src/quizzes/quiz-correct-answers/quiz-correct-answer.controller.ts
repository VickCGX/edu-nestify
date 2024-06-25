import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { QuizCorrectAnswerService } from './quiz-correct-answer.service'
import { CreateQuizCorrectAnswerDto } from './dtos/create-quiz-correct-answer.dto'
import { UpdateQuizCorrectAnswerDto } from './dtos/update-quiz-correct-answer.dto'
import { QuizCorrectAnswerDto } from './dtos/quiz-correct-answer.dto'
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

@ApiTags('quiz-correct-answers')
@Controller('quiz-correct-answers')
export class QuizCorrectAnswerController {
  constructor(private readonly quizCorrectAnswerService: QuizCorrectAnswerService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create quiz correct answer')
  @ApiResponseModel(QuizCorrectAnswerDto, HttpStatus.CREATED)
  async create(@Body() createQuizCorrectAnswerDto: CreateQuizCorrectAnswerDto): Promise<QuizCorrectAnswerDto> {
    return this.quizCorrectAnswerService.create(createQuizCorrectAnswerDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get quiz correct answer by ID')
  @ApiResponseModel(QuizCorrectAnswerDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<QuizCorrectAnswerDto> {
    return this.quizCorrectAnswerService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many quiz correct answers')
  @ApiQueryOptions()
  @ApiResponseArrayModel(QuizCorrectAnswerDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<QuizCorrectAnswerDto>> {
    return this.quizCorrectAnswerService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update quiz correct answer')
  @ApiResponseModel(QuizCorrectAnswerDto, HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() updateQuizCorrectAnswerDto: UpdateQuizCorrectAnswerDto
  ): Promise<QuizCorrectAnswerDto> {
    return this.quizCorrectAnswerService.update(id, updateQuizCorrectAnswerDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a quiz correct answer')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.quizCorrectAnswerService.remove(id)
  }
}
