import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty } from 'class-validator'

export class CreateScoreDto {
  @ApiProperty({ example: 90 })
  @IsInt()
  @IsNotEmpty()
  marks: number

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  studentId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  quizId: number
}
