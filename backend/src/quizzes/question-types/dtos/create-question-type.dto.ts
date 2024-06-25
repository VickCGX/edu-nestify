import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class CreateQuestionTypeDto {
  @ApiProperty({ example: 'single_choice' })
  @IsString()
  @IsNotEmpty()
  name: string
}
