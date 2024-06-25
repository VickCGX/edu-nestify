import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt, IsOptional, IsDate } from 'class-validator'

export class CreateAnnouncementDto {
  @ApiProperty({ example: 'Important Update' })
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty({ example: 'Classes will be online tomorrow due to weather conditions.' })
  @IsString()
  @IsNotEmpty()
  content: string

  @ApiPropertyOptional({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsOptional()
  date?: Date

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  classId?: number
}
