import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt, IsOptional, IsDate } from 'class-validator'

export class CreateAssignmentDto {
  @ApiProperty({ example: 'Math Homework' })
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiPropertyOptional({ example: 'Solve the problems in the attached sheet' })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  dueDate: Date

  @ApiProperty({ example: 'pending' })
  @IsString()
  @IsNotEmpty()
  status: string

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  classId: number
}
