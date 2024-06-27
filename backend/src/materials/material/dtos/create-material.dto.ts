import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateMaterialDto {
  @ApiProperty({ example: 'Introduction to Programming' })
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty({ example: 'Content of the material', required: false })
  @IsString()
  @IsOptional()
  content?: string

  @ApiProperty({ example: '/path/to/material.pdf' })
  @IsString()
  @IsNotEmpty()
  path: string

  @ApiProperty({ example: 1 })
  @IsInt()
  materialTypeId: number

  @ApiProperty({ example: 1, required: false })
  @IsInt()
  @IsOptional()
  subjectId?: number

  @ApiProperty({ example: 1, required: false })
  @IsInt()
  @IsOptional()
  moduleId?: number
}
