import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt } from 'class-validator'

export class UpdateClassDto {
  @ApiPropertyOptional({ example: 'Math 101' })
  @IsString()
  @IsOptional()
  name?: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  teacherId?: number
}
