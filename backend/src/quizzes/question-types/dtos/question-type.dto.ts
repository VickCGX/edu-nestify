import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString } from 'class-validator'

export class QuestionTypeDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'single_choice' })
  @IsString()
  name: string

  constructor(partial: Partial<QuestionTypeDto>) {
    Object.assign(this, partial)
  }
}
