import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator'
import { SubjectDto } from '../../subjects/dtos/subject.dto'

export class ModuleDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Introduction to Algorithms' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiPropertyOptional({ example: 'This module covers the basics of algorithms.' })
  @IsString()
  @IsOptional()
  content?: string

  @ApiProperty({ example: 1 })
  @IsInt()
  subjectId: number

  @ApiPropertyOptional({ type: SubjectDto })
  @IsOptional()
  subject?: SubjectDto

  constructor(partial: Partial<ModuleDto>) {
    Object.assign(this, partial)
  }
}
