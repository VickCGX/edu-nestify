import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import { RoleService } from './role.service'
import { CreateRoleDto } from './dtos/create-role.dto'
import { UpdateRoleDto } from './dtos/update-role.dto'
import { RoleDto } from './dtos/role.dto'
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

@ApiTags('roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create role')
  @ApiResponseModel(RoleDto, HttpStatus.CREATED)
  async create(@Body() createRoleDto: CreateRoleDto): Promise<RoleDto> {
    return this.roleService.create(createRoleDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get role by ID')
  @ApiResponseModel(RoleDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<RoleDto> {
    return this.roleService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many roles')
  @ApiQueryOptions()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return many roles.',
    type: () => PaginationResponse<RoleDto>
  })
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<RoleDto>> {
    return this.roleService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update role')
  @ApiResponseModel(RoleDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateRoleDto: UpdateRoleDto): Promise<RoleDto> {
    return this.roleService.update(id, updateRoleDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a role')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.roleService.remove(id)
  }
}
