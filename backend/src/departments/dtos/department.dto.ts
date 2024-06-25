import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsNotEmpty } from 'class-validator'

export class DepartmentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Computer Science' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: '2023-06-20T12:00:00Z' })
  createdAt: Date

  @ApiProperty({ example: '2023-06-20T12:00:00Z' })
  updatedAt: Date

  constructor(partial: Partial<DepartmentDto>) {
    Object.assign(this, partial)
  }
}
