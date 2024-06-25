import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt, IsDate } from 'class-validator'

export class UpdateAnnouncementDto {
  @ApiPropertyOptional({ example: 'Important Update' })
  @IsString()
  @IsOptional()
  title?: string

  @ApiPropertyOptional({ example: 'Classes will be online tomorrow due to weather conditions.' })
  @IsString()
  @IsOptional()
  content?: string

  @ApiPropertyOptional({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsOptional()
  date?: Date

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  classId?: number
}
