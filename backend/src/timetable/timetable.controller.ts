import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TimetableService } from './timetable.service'
import { CreateTimetableDto } from './dtos/create-timetable.dto'
import { UpdateTimetableDto } from './dtos/update-timetable.dto'
import { TimetableDto } from './dtos/timetable.dto'
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

@ApiTags('timetables')
@Controller('timetables')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create timetable')
  @ApiResponseModel(TimetableDto, HttpStatus.CREATED)
  async create(@Body() createTimetableDto: CreateTimetableDto): Promise<TimetableDto> {
    return this.timetableService.create(createTimetableDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get timetable by ID')
  @ApiResponseModel(TimetableDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<TimetableDto> {
    return this.timetableService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many timetables')
  @ApiQueryOptions()
  @ApiResponseArrayModel(TimetableDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<TimetableDto>> {
    return this.timetableService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update timetable')
  @ApiResponseModel(TimetableDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateTimetableDto: UpdateTimetableDto): Promise<TimetableDto> {
    return this.timetableService.update(id, updateTimetableDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a timetable')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.timetableService.remove(id)
  }
}
