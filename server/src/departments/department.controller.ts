import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpCode, HttpStatus } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger'
import { DepartmentService } from './department.service'
import { CreateDepartmentDto } from './dtos/create-department.dto'
import { UpdateDepartmentDto } from './dtos/update-department.dto'
import { DepartmentDto } from './dtos/department.dto'
import { FilterDto, PaginationDto, SortDto, PaginationResponse } from 'src/shared'

@ApiTags('departments')
@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create department' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Department created successfully', type: DepartmentDto })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  async create(@Body() createDepartmentDto: CreateDepartmentDto): Promise<DepartmentDto> {
    return this.departmentService.create(createDepartmentDto)
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get department by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Department retrieved successfully', type: DepartmentDto })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Department not found' })
  async findOneById(@Param('id') id: number): Promise<DepartmentDto> {
    return this.departmentService.findOne(id)
  }

  @Get()
  @ApiOperation({ summary: 'Get many departments' })
  @ApiQuery({ name: 'filter', type: FilterDto, required: false, description: 'Filter options' })
  @ApiQuery({ name: 'pagination', type: PaginationDto, required: false, description: 'Pagination options' })
  @ApiQuery({ name: 'sort', type: SortDto, required: false, description: 'Sort options' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return many departments.',
    type: () => PaginationResponse<DepartmentDto>
  })
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<DepartmentDto>> {
    return this.departmentService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update department' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Department updated successfully', type: DepartmentDto })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Department not found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  async update(@Param('id') id: number, @Body() updateDepartmentDto: UpdateDepartmentDto): Promise<DepartmentDto> {
    return this.departmentService.update(id, updateDepartmentDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a department' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Deleted successfully' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.departmentService.remove(id)
  }
}
