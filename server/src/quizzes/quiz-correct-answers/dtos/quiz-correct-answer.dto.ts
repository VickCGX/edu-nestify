import { ApiProperty } from '@nestjs/swagger'
import { IsInt, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { QuizQuestionDto } from '../../quiz-question/dtos/quiz-question.dto'

export class QuizCorrectAnswerDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 1 })
  @IsInt()
  optionId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  questionId: number

  @ApiProperty({ type: () => QuizQuestionDto })
  @ValidateNested()
  @Type(() => QuizQuestionDto)
  quizQuestion: QuizQuestionDto

  constructor(partial: Partial<QuizCorrectAnswerDto>) {
    Object.assign(this, partial)
  }
}
