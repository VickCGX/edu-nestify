import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator'

export class CreateQuizQuestionDto {
  @ApiProperty({ example: 'What is the capital of France?' })
  @IsString()
  @IsNotEmpty()
  question: string

  @ApiProperty({ example: 'single_choice' })
  @IsString()
  @IsNotEmpty()
  type: string // single_choice, multiple_choice, true_false, short_answer

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  quizId: number

  @ApiPropertyOptional({ example: ['Paris', 'London', 'Berlin', 'Madrid'] })
  @IsOptional()
  options?: string[]
}
