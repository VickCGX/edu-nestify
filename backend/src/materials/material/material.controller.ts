import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import { MaterialService } from './material.service'
import { CreateMaterialDto } from './dtos/create-material.dto'
import { UpdateMaterialDto } from './dtos/update-material.dto'
import { MaterialDto } from './dtos/material.dto'
import {
  FilterDto,
  PaginationDto,
  SortDto,
  PaginationResponse,
  ApiResponseModel,
  ApiOperationSummary,
  ApiQueryOptions,
  HttpStatusCode
} from 'src/shared'

@ApiTags('materials')
@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create material')
  @ApiResponseModel(MaterialDto, HttpStatus.CREATED)
  async create(@Body() createMaterialDto: CreateMaterialDto): Promise<MaterialDto> {
    return this.materialService.create(createMaterialDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get material by ID')
  @ApiResponseModel(MaterialDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<MaterialDto> {
    return this.materialService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many materials')
  @ApiQueryOptions()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return many materials.',
    type: () => PaginationResponse<MaterialDto>
  })
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<MaterialDto>> {
    return this.materialService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update material')
  @ApiResponseModel(MaterialDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateMaterialDto: UpdateMaterialDto): Promise<MaterialDto> {
    return this.materialService.update(id, updateMaterialDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a material')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.materialService.remove(id)
  }
}
