import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { UpdateUserDto } from './dtos/update-user.dto'
import { UserDto } from './dtos/user.dto'
import { ApiResponseModel, ApiResponseArrayModel, ApiOperationSummary, HttpStatusCode } from 'src/shared'

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpStatusCode(HttpStatus.CREATED)
  @ApiOperationSummary('Create a new user')
  @ApiResponseModel(UserDto, HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.userService.create(createUserDto)
  }

  @Get(':username')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get a user by username')
  @ApiResponseModel(UserDto, HttpStatus.OK)
  async findOne(@Param('username') username: string): Promise<UserDto> {
    return await this.userService.findOne(username)
  }

  @Get()
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Get all users')
  @ApiResponseArrayModel(UserDto)
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll()
  }

  @Put(':id')
  @HttpStatusCode(HttpStatus.OK)
  @ApiOperationSummary('Update a user by ID')
  @ApiResponseModel(UserDto, HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
    return await this.userService.update(id, updateUserDto)
  }

  @Delete(':id')
  @HttpStatusCode(HttpStatus.NO_CONTENT)
  @ApiOperationSummary('Delete a user by ID')
  @ApiResponseModel(null, HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id)
  }
}
