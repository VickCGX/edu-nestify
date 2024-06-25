import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt, IsDate } from 'class-validator'

export class UpdateTimetableDto {
  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  classId?: number

  @ApiPropertyOptional({ example: 'Monday' })
  @IsString()
  @IsOptional()
  day?: string

  @ApiPropertyOptional({ example: '2024-01-01T08:00:00.000Z' })
  @IsDate()
  @IsOptional()
  startTime?: Date

  @ApiPropertyOptional({ example: '2024-01-01T09:00:00.000Z' })
  @IsDate()
  @IsOptional()
  endTime?: Date

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  subjectId?: number
}
