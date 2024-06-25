import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ScoreService } from './score.service'
import { CreateScoreDto } from './dtos/create-score.dto'
import { UpdateScoreDto } from './dtos/update-score.dto'
import { ScoreDto } from './dtos/score.dto'
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

@ApiTags('scores')
@Controller('scores')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create score')
  @ApiResponseModel(ScoreDto, HttpStatus.CREATED)
  async create(@Body() createScoreDto: CreateScoreDto): Promise<ScoreDto> {
    return this.scoreService.create(createScoreDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get score by ID')
  @ApiResponseModel(ScoreDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<ScoreDto> {
    return this.scoreService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many scores')
  @ApiQueryOptions()
  @ApiResponseArrayModel(ScoreDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<ScoreDto>> {
    return this.scoreService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update score')
  @ApiResponseModel(ScoreDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateScoreDto: UpdateScoreDto): Promise<ScoreDto> {
    return this.scoreService.update(id, updateScoreDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a score')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.scoreService.remove(id)
  }
}
