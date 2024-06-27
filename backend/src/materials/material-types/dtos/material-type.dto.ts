import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class MaterialTypeDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Lecture Notes' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 'Notes taken during lectures' })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ example: '2023-06-20T12:00:00Z' })
  createdAt: Date

  @ApiProperty({ example: '2023-06-20T12:00:00Z' })
  updatedAt: Date

  constructor(partial: Partial<MaterialTypeDto>) {
    Object.assign(this, partial)
  }
}
