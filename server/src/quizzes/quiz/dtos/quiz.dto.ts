import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsDate, IsOptional } from 'class-validator'
import { QuizQuestionDto } from '../../quiz-question/dtos/quiz-question.dto'

export class QuizDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Sample Quiz Title' })
  @IsString()
  title: string

  @ApiPropertyOptional({ example: 'Sample quiz description' })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ example: 60 })
  @IsInt()
  duration: number // Duration in minutes

  @ApiProperty({ example: 100 })
  @IsInt()
  totalMarks: number

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  startTime: Date

  @ApiProperty({ example: '2024-01-01T01:00:00.000Z' })
  @IsDate()
  endTime: Date

  @ApiProperty({ example: 'scheduled' })
  @IsString()
  status: string

  @ApiProperty({ example: 1 })
  @IsInt()
  classId: number

  @ApiPropertyOptional({ type: () => [QuizQuestionDto] })
  questions?: QuizQuestionDto[]

  constructor(partial: Partial<QuizDto>) {
    Object.assign(this, partial)
  }
}
