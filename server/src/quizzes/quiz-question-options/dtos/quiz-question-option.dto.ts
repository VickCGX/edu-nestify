import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString } from 'class-validator'

export class QuizQuestionOptionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Paris' })
  @IsString()
  text: string

  @ApiProperty({ example: 1 })
  @IsInt()
  questionId: number

  constructor(partial: Partial<QuizQuestionOptionDto>) {
    Object.assign(this, partial)
  }
}
