import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt } from 'class-validator'

export class CreateClassDto {
  @ApiProperty({ example: 'Math 101' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 1 })
  @IsInt()
  teacherId: number
}
