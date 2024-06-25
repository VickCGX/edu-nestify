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
        password: hashedPassword,
        role: {
          connect: { id: createUserDto.roleId }
        }
      }
    })
    return new UserDto(user)
  }

  async findOne(username: string): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { username }
    })
    return user
  }

  async findOneById(id: number): Promise<UserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })
    return user
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.prisma.user.findMany()
    return users
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    const { roleId, ...updateData } = updateUserDto

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, BCRYPT_SALT_ROUND)
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...updateData,
        ...(roleId && {
          role: { connect: { id: roleId } }
        })
      }
    })

    return user
  }

  async remove(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: { id }
    })
  }
}
