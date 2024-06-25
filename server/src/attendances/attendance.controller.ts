import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AttendanceService } from './attendance.service'
import { CreateAttendanceDto } from './dtos/create-attendance.dto'
import { UpdateAttendanceDto } from './dtos/update-attendance.dto'
import { AttendanceDto } from './dtos/attendance.dto'
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

@ApiTags('attendances')
@Controller('attendances')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create attendance')
  @ApiResponseModel(AttendanceDto, HttpStatus.CREATED)
  async create(@Body() createAttendanceDto: CreateAttendanceDto): Promise<AttendanceDto> {
    return this.attendanceService.create(createAttendanceDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get attendance by ID')
  @ApiResponseModel(AttendanceDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<AttendanceDto> {
    return this.attendanceService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many attendances')
  @ApiQueryOptions()
  @ApiResponseArrayModel(AttendanceDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<AttendanceDto>> {
    return this.attendanceService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update attendance')
  @ApiResponseModel(AttendanceDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateAttendanceDto: UpdateAttendanceDto): Promise<AttendanceDto> {
    return this.attendanceService.update(id, updateAttendanceDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete an attendance')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.attendanceService.remove(id)
  }
}
