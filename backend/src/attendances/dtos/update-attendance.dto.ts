import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt, IsDate } from 'class-validator'

export class UpdateAttendanceDto {
  @ApiPropertyOptional({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsOptional()
  date?: Date

  @ApiPropertyOptional({ example: 'present' })
  @IsString()
  @IsOptional()
  status?: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  studentId?: number

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  classId?: number
}
