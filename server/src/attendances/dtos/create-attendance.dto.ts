import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt, IsDate } from 'class-validator'

export class CreateAttendanceDto {
  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  date: Date

  @ApiProperty({ example: 'present' })
  @IsString()
  @IsNotEmpty()
  status: string

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  studentId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  classId: number
}
