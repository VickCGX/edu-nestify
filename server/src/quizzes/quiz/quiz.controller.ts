import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { QuizService } from './quiz.service'
import { CreateQuizDto } from './dtos/create-quiz.dto'
import { UpdateQuizDto } from './dtos/update-quiz.dto'
import { QuizDto } from './dtos/quiz.dto'
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

@ApiTags('quizzes')
@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create quiz')
  @ApiResponseModel(QuizDto, HttpStatus.CREATED)
  async create(@Body() createQuizDto: CreateQuizDto): Promise<QuizDto> {
    return this.quizService.create(createQuizDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get quiz by ID')
  @ApiResponseModel(QuizDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<QuizDto> {
    return this.quizService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many quizzes')
  @ApiQueryOptions()
  @ApiResponseArrayModel(QuizDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<QuizDto>> {
    return this.quizService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update quiz')
  @ApiResponseModel(QuizDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateQuizDto: UpdateQuizDto): Promise<QuizDto> {
    return this.quizService.update(id, updateQuizDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a quiz')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.quizService.remove(id)
  }
}
