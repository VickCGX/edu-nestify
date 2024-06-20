import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { UpdateUserDto } from './dtos/update-user.dto'
import { UserDto } from './dtos/user.dto'
import { BCRYPT_SALT_ROUND } from 'src/shared'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, BCRYPT_SALT_ROUND)
    const user = await this.prisma.user.create({
      data: {
        username: createUserDto.username,
        name: createUserDto.name,
        password: hashedPassword
      }
    })
    return new UserDto(user)
  }

  async findOne(username: string): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { username }
    })
    return user ? new UserDto(user) : null
  }

  async findOneById(id: number): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })
    return user ? new UserDto(user) : null
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.prisma.user.findMany()
    return users.map(user => new UserDto(user))
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, BCRYPT_SALT_ROUND)
      updateUserDto.password = hashedPassword
    }
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        username: updateUserDto.username,
        name: updateUserDto.name,
        password: updateUserDto.password
      }
    })
    return new UserDto(user)
  }

  async remove(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: { id }
    })
  }
}
