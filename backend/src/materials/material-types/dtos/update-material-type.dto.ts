import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsOptional } from 'class-validator'

export class UpdateMaterialTypeDto {
  @ApiProperty({ example: 'Lecture Notes', required: false })
  @IsString()
  @IsOptional()
  name?: string

  @ApiProperty({ example: 'Notes taken during lectures', required: false })
  @IsString()
  @IsOptional()
  description?: string
}
