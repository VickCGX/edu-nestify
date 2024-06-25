import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt } from 'class-validator'

export class UpdateQuizQuestionOptionDto {
  @ApiPropertyOptional({ example: 'Paris' })
  @IsString()
  @IsOptional()
  text?: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  questionId?: number
}
