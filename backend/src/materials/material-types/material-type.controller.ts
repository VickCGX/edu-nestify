import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import { MaterialTypeService } from './material-type.service'
import { CreateMaterialTypeDto } from './dtos/create-material-type.dto'
import { UpdateMaterialTypeDto } from './dtos/update-material-type.dto'
import { MaterialTypeDto } from './dtos/material-type.dto'
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

@ApiTags('material-types')
@Controller('material-types')
export class MaterialTypeController {
  constructor(private readonly materialTypeService: MaterialTypeService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create material type')
  @ApiResponseModel(MaterialTypeDto, HttpStatus.CREATED)
  async create(@Body() createMaterialTypeDto: CreateMaterialTypeDto): Promise<MaterialTypeDto> {
    return this.materialTypeService.create(createMaterialTypeDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get material type by ID')
  @ApiResponseModel(MaterialTypeDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<MaterialTypeDto> {
    return this.materialTypeService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many material types')
  @ApiQueryOptions()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return many material types.',
    type: () => PaginationResponse<MaterialTypeDto>
  })
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<MaterialTypeDto>> {
    return this.materialTypeService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update material type')
  @ApiResponseModel(MaterialTypeDto, HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() updateMaterialTypeDto: UpdateMaterialTypeDto
  ): Promise<MaterialTypeDto> {
    return this.materialTypeService.update(id, updateMaterialTypeDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a material type')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.materialTypeService.remove(id)
  }
}
