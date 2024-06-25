import { Controller, Post, Body, Put, Param, Get, Query, Delete, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { NotificationService } from './notification.service'
import { CreateNotificationDto } from './dtos/create-notification.dto'
import { UpdateNotificationDto } from './dtos/update-notification.dto'
import { NotificationDto } from './dtos/notification.dto'
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

@ApiTags('notifications')
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create notification')
  @ApiResponseModel(NotificationDto, HttpStatus.CREATED)
  async create(@Body() createNotificationDto: CreateNotificationDto): Promise<NotificationDto> {
    return this.notificationService.create(createNotificationDto)
  }

  @Get(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get notification by ID')
  @ApiResponseModel(NotificationDto, HttpStatus.OK)
  async findOneById(@Param('id') id: number): Promise<NotificationDto> {
    return this.notificationService.findOne(id)
  }

  @Get()
  @ApiOperationSummary('Get many notifications')
  @ApiQueryOptions()
  @ApiResponseArrayModel(NotificationDto)
  async findMany(
    @Query('filter') filterDto?: FilterDto,
    @Query('pagination') paginationDto?: PaginationDto,
    @Query('sort') sortDto?: SortDto
  ): Promise<PaginationResponse<NotificationDto>> {
    return this.notificationService.findMany(filterDto, paginationDto, sortDto)
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update notification')
  @ApiResponseModel(NotificationDto, HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() updateNotificationDto: UpdateNotificationDto
  ): Promise<NotificationDto> {
    return this.notificationService.update(id, updateNotificationDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a notification')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.notificationService.remove(id)
  }
}
