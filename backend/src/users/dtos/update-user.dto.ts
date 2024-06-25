import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsValidPassword } from 'src/shared'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: 'password123' })
  @IsValidPassword()
  password: string
}
