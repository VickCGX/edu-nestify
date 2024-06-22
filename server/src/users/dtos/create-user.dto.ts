import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsOptional } from 'class-validator'
import { IsValidPassword } from '../../shared'

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe' })
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiPropertyOptional({ example: 'John Doe', required: false })
  @IsString()
  @IsOptional()
  name?: string

  @ApiProperty({ example: 'password123' })
  @IsValidPassword()
  password: string

  @ApiPropertyOptional({ example: 1, required: false })
  @IsOptional()
  roleId?: number
}
