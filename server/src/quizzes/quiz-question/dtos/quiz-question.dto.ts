import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsOptional } from 'class-validator'
import { QuizQuestionOptionDto } from '../../quiz-question-options/dtos/quiz-question-option.dto'

export class QuizQuestionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'What is the capital of France?' })
  @IsString()
  question: string

  @ApiProperty({ example: 'single_choice' })
  @IsString()
  type: string // single_choice, multiple_choice, true_false, short_answer

  @ApiProperty({ example: 1 })
  @IsInt()
  quizId: number

  @ApiPropertyOptional({ type: () => [QuizQuestionOptionDto] })
  options?: QuizQuestionOptionDto[]

  constructor(partial: Partial<QuizQuestionDto>) {
    Object.assign(this, partial)
  }
}
