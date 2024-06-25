import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt } from 'class-validator'

export class CreateQuizQuestionOptionDto {
  @ApiProperty({ example: 'Paris' })
  @IsString()
  @IsNotEmpty()
  text: string

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  questionId: number
}
