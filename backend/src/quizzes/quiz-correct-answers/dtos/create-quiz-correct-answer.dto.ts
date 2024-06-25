import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty } from 'class-validator'

export class CreateQuizCorrectAnswerDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  optionId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  questionId: number
}
