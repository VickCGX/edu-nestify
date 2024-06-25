import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator'

export class CreateFeedbackDto {
  @ApiProperty({ example: 'Great job on the assignment!' })
  @IsString()
  @IsNotEmpty()
  content: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  assignmentId?: number

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  quizId?: number

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  studentId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  teacherId: number
}
