import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateMaterialTypeDto {
  @ApiProperty({ example: 'Lecture Notes' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 'Notes taken during lectures' })
  @IsString()
  @IsOptional()
  description?: string
}
