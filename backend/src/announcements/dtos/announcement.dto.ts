import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsDate, IsOptional } from 'class-validator'
import { ClassDto } from '../../classes/dtos/class.dto'

export class AnnouncementDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Important Update' })
  @IsString()
  title: string

  @ApiProperty({ example: 'Classes will be online tomorrow due to weather conditions.' })
  @IsString()
  content: string

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  date: Date

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  classId?: number

  @ApiPropertyOptional({ type: () => ClassDto })
  @IsOptional()
  class?: ClassDto

  constructor(partial: Partial<AnnouncementDto>) {
    Object.assign(this, partial)
  }
}
