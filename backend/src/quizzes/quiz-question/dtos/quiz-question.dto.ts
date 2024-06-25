import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString } from 'class-validator'
import { QuizQuestionOptionDto } from '../../quiz-question-options/dtos/quiz-question-option.dto'
import { QuizCorrectAnswerDto } from '../../quiz-correct-answers/dtos/quiz-correct-answer.dto'

export class QuizQuestionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'What is the capital of France?' })
  @IsString()
  question: string

  @ApiProperty({ example: 1 })
  @IsInt()
  quizId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  questionTypeId: number

  @ApiPropertyOptional({ type: () => [QuizQuestionOptionDto] })
  options?: QuizQuestionOptionDto[]

  @ApiPropertyOptional({ type: () => [QuizCorrectAnswerDto] })
  correctAnswers?: QuizCorrectAnswerDto[]

  constructor(partial: Partial<QuizQuestionDto>) {
    Object.assign(this, partial)
  }
}
