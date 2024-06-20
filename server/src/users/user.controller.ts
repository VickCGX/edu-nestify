import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpCode,
  NotFoundException
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'
import { UserService } from './user.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { UpdateUserDto } from './dtos/update-user.dto'
import { UserDto } from './dtos/user.dto'

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'User successfully created.', type: UserDto })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid data.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.userService.create(createUserDto)
  }

  @Get(':username')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get a user by username' })
  @ApiParam({ name: 'username', required: true, description: 'Username of the user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'User found.', type: UserDto })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
  async findOne(@Param('username') username: string): Promise<UserDto> {
    const user = await this.userService.findOne(username)
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Users retrieved successfully.', type: [UserDto] })
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll()
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the user' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: HttpStatus.OK, description: 'User updated successfully.', type: UserDto })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
    const user = await this.userService.update(id, updateUserDto)
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the user' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'User deleted successfully.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    const user = await this.userService.findOneById(id)
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return this.userService.remove(id)
  }
}
