import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsDate, IsOptional } from 'class-validator'
import { StudentDto } from '../../students/dtos/student.dto'
import { ClassDto } from '../../classes/dtos/class.dto'

export class AttendanceDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  date: Date

  @ApiProperty({ example: 'present' })
  @IsString()
  status: string

  @ApiProperty({ example: 1 })
  @IsInt()
  studentId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  classId: number

  @ApiPropertyOptional({ type: () => StudentDto })
  @IsOptional()
  student?: StudentDto

  @ApiPropertyOptional({ type: () => ClassDto })
  @IsOptional()
  class?: ClassDto

  constructor(partial: Partial<AttendanceDto>) {
    Object.assign(this, partial)
  }
}
