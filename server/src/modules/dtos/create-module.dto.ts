import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateModuleDto {
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

  constructor(partial: Partial<CreateModuleDto>) {
    Object.assign(this, partial)
  }
}
