import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsOptional, IsNotEmpty } from 'class-validator'
import { IsValidPassword } from 'src/shared'

export class UserDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'john_doe' })
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiPropertyOptional({ example: 'password' })
  @IsValidPassword()
  password?: string

  @ApiPropertyOptional({ example: 'John Doe', required: false })
  @IsString()
  @IsOptional()
  name?: string

  @ApiProperty({ example: '2023-06-20T12:00:00Z' })
  createdAt: Date

  @ApiProperty({ example: '2023-06-20T12:00:00Z' })
  updatedAt: Date

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial)
  }
}
