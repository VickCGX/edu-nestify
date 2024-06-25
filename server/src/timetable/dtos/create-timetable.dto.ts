import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt, IsDate } from 'class-validator'

export class CreateTimetableDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  classId: number

  @ApiProperty({ example: 'Monday' })
  @IsString()
  @IsNotEmpty()
  day: string

  @ApiProperty({ example: '2024-01-01T08:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  startTime: Date

  @ApiProperty({ example: '2024-01-01T09:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  endTime: Date

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  subjectId: number
}
