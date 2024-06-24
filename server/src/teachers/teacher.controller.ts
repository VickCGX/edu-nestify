import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import { TeacherService } from './teacher.service'
import { CreateTeacherDto } from './dtos/create-teacher.dto'
import { UpdateTeacherDto } from './dtos/update-teacher.dto'
import { TeacherDto } from './dtos/teacher.dto'
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

@ApiTags('teachers')
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create teacher')
  @ApiResponseModel(TeacherDto, HttpStatus.CREATED)
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<TeacherDto> {
    return this.teacherService.create(createTeacherDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get teacher by ID')
  @ApiResponseModel(TeacherDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<TeacherDto> {
    return this.teacherService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many teachers')
  @ApiQueryOptions()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return many teachers.',
    type: () => PaginationResponse<TeacherDto>
  })
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<TeacherDto>> {
    return this.teacherService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update teacher')
  @ApiResponseModel(TeacherDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateTeacherDto: UpdateTeacherDto): Promise<TeacherDto> {
    return this.teacherService.update(id, updateTeacherDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a teacher')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.teacherService.remove(id)
  }
}
