import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ModuleService } from './module.service'
import { CreateModuleDto } from './dtos/create-module.dto'
import { UpdateModuleDto } from './dtos/update-module.dto'
import { ModuleDto } from './dtos/module.dto'
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

@ApiTags('modules')
@Controller('modules')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create module')
  @ApiResponseModel(ModuleDto, HttpStatus.CREATED)
  async create(@Body() createModuleDto: CreateModuleDto): Promise<ModuleDto> {
    return this.moduleService.create(createModuleDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get module by ID')
  @ApiResponseModel(ModuleDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<ModuleDto> {
    return this.moduleService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many modules')
  @ApiQueryOptions()
  @ApiResponseArrayModel(ModuleDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<ModuleDto>> {
    return this.moduleService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update module')
  @ApiResponseModel(ModuleDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateModuleDto: UpdateModuleDto): Promise<ModuleDto> {
    return this.moduleService.update(id, updateModuleDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a module')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.moduleService.remove(id)
  }
}
