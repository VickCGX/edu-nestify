import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import { ClassService } from './class.service'
import { CreateClassDto } from './dtos/create-class.dto'
import { UpdateClassDto } from './dtos/update-class.dto'
import { ClassDto } from './dtos/class.dto'
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

@ApiTags('classes')
@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create class')
  @ApiResponseModel(ClassDto, HttpStatus.CREATED)
  async create(@Body() createClassDto: CreateClassDto): Promise<ClassDto> {
    return this.classService.create(createClassDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get class by ID')
  @ApiResponseModel(ClassDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<ClassDto> {
    return this.classService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many classes')
  @ApiQueryOptions()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return many classes.',
    type: () => PaginationResponse<ClassDto>
  })
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<ClassDto>> {
    return this.classService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update class')
  @ApiResponseModel(ClassDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateClassDto: UpdateClassDto): Promise<ClassDto> {
    return this.classService.update(id, updateClassDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a class')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.classService.remove(id)
  }
}
