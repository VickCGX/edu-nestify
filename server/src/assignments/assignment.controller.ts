import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AssignmentService } from './assignment.service'
import { CreateAssignmentDto } from './dtos/create-assignment.dto'
import { UpdateAssignmentDto } from './dtos/update-assignment.dto'
import { AssignmentDto } from './dtos/assignment.dto'
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

@ApiTags('assignments')
@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create assignment')
  @ApiResponseModel(AssignmentDto, HttpStatus.CREATED)
  async create(@Body() createAssignmentDto: CreateAssignmentDto): Promise<AssignmentDto> {
    return this.assignmentService.create(createAssignmentDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get assignment by ID')
  @ApiResponseModel(AssignmentDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<AssignmentDto> {
    return this.assignmentService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many assignments')
  @ApiQueryOptions()
  @ApiResponseArrayModel(AssignmentDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<AssignmentDto>> {
    return this.assignmentService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update assignment')
  @ApiResponseModel(AssignmentDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateAssignmentDto: UpdateAssignmentDto): Promise<AssignmentDto> {
    return this.assignmentService.update(id, updateAssignmentDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete an assignment')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.assignmentService.remove(id)
  }
}
