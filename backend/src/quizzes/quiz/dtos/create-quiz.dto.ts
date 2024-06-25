import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt, IsOptional, IsDate } from 'class-validator'

export class CreateQuizDto {
  @ApiProperty({ example: 'Sample Quiz Title' })
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiPropertyOptional({ example: 'Sample quiz description' })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ example: 60 })
  @IsInt()
  @IsNotEmpty()
  duration: number // Duration in minutes

  @ApiProperty({ example: 100 })
  @IsInt()
  @IsNotEmpty()
  totalMarks: number

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  startTime: Date

  @ApiProperty({ example: '2024-01-01T01:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  endTime: Date

  @ApiProperty({ example: 'scheduled' })
  @IsString()
  @IsNotEmpty()
  status: string

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  classId: number
}
