import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import { StudentService } from './student.service'
import { CreateStudentDto } from './dtos/create-student.dto'
import { UpdateStudentDto } from './dtos/update-student.dto'
import { StudentDto } from './dtos/student.dto'
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

@ApiTags('students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create student')
  @ApiResponseModel(StudentDto, HttpStatus.CREATED)
  async create(@Body() createStudentDto: CreateStudentDto): Promise<StudentDto> {
    return this.studentService.create(createStudentDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get student by ID')
  @ApiResponseModel(StudentDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<StudentDto> {
    return this.studentService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many students')
  @ApiQueryOptions()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return many students.',
    type: () => PaginationResponse<StudentDto>
  })
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<StudentDto>> {
    return this.studentService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update student')
  @ApiResponseModel(StudentDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto): Promise<StudentDto> {
    return this.studentService.update(id, updateStudentDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a student')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.studentService.remove(id)
  }
}
