import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsOptional } from 'class-validator'

export class UpdateModuleDto {
  @ApiPropertyOptional({ example: 'Introduction to Algorithms' })
  @IsString()
  @IsOptional()
  name?: string

  @ApiPropertyOptional({ example: 'This module covers the basics of algorithms.' })
  @IsString()
  @IsOptional()
  content?: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  subjectId?: number

  constructor(partial: Partial<UpdateModuleDto>) {
    Object.assign(this, partial)
  }
}
