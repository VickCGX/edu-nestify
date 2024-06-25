import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsOptional } from 'class-validator'

export class UpdateQuizCorrectAnswerDto {
  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  optionId?: number

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  questionId?: number
}
