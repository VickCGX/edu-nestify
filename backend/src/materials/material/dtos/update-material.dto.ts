import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsOptional } from 'class-validator'

export class UpdateMaterialDto {
  @ApiProperty({ example: 'Introduction to Programming', required: false })
  @IsString()
  @IsOptional()
  title?: string

  @ApiProperty({ example: 'Content of the material', required: false })
  @IsString()
  @IsOptional()
  content?: string

  @ApiProperty({ example: '/path/to/material.pdf', required: false })
  @IsString()
  @IsOptional()
  path?: string

  @ApiProperty({ example: 1, required: false })
  @IsInt()
  @IsOptional()
  materialTypeId?: number

  @ApiProperty({ example: 1, required: false })
  @IsInt()
  @IsOptional()
  subjectId?: number

  @ApiProperty({ example: 1, required: false })
  @IsInt()
  @IsOptional()
  moduleId?: number
}
