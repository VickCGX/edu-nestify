import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt } from 'class-validator'

export class UpdateFeedbackDto {
  @ApiPropertyOptional({ example: 'Great job on the assignment!' })
  @IsString()
  @IsOptional()
  content?: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  assignmentId?: number

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  quizId?: number

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  studentId?: number

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  teacherId?: number
}
