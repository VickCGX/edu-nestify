import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class RoleDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiPropertyOptional({ example: 'Administrator role' })
  @IsString()
  @IsOptional()
  description?: string

  constructor(partial: Partial<RoleDto>) {
    Object.assign(this, partial)
  }
}
