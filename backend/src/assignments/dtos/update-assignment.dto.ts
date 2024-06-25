import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt, IsDate } from 'class-validator'

export class UpdateAssignmentDto {
  @ApiPropertyOptional({ example: 'Math Homework' })
  @IsString()
  @IsOptional()
  title?: string

  @ApiPropertyOptional({ example: 'Solve the problems in the attached sheet' })
  @IsString()
  @IsOptional()
  description?: string

  @ApiPropertyOptional({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsOptional()
  dueDate?: Date

  @ApiPropertyOptional({ example: 'pending' })
  @IsString()
  @IsOptional()
  status?: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  classId?: number
}
