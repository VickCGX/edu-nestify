import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class UpdateQuestionTypeDto {
  @ApiPropertyOptional({ example: 'single_choice' })
  @IsString()
  @IsOptional()
  name?: string
}
