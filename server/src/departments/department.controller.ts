import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { DepartmentService } from './department.service'
import { CreateDepartmentDto } from './dtos/create-department.dto'
import { UpdateDepartmentDto } from './dtos/update-department.dto'
import { DepartmentDto } from './dtos/department.dto'
import {
  FilterDto,
  PaginationDto,
  SortDto,
  PaginationResponse,
  ApiResponseModel,
  ApiResponseArrayModel,
  ApiOperationSummary,
  ApiQueryOptions,
  HttpStatusCode
} from 'src/shared'

@ApiTags('departments')
@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create department')
  @ApiResponseModel(DepartmentDto, HttpStatus.CREATED)
  async create(@Body() createDepartmentDto: CreateDepartmentDto): Promise<DepartmentDto> {
    return this.departmentService.create(createDepartmentDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get department by ID')
  @ApiResponseModel(DepartmentDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<DepartmentDto> {
    return this.departmentService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many departments')
  @ApiQueryOptions()
  @ApiResponseArrayModel(DepartmentDto, HttpStatus.OK)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<DepartmentDto>> {
    return this.departmentService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update department')
  @ApiResponseModel(DepartmentDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateDepartmentDto: UpdateDepartmentDto): Promise<DepartmentDto> {
    return this.departmentService.update(id, updateDepartmentDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a department')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.departmentService.remove(id)
  }
}
