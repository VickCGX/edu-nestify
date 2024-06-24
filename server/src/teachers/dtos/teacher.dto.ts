import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsEmail, IsDateString, IsOptional, IsNotEmpty } from 'class-validator'
import { ClassDto } from '../../classes/dtos/class.dto'

export class TeacherDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiPropertyOptional({ example: 'john.doe@example.com' })
  @IsEmail()
  @IsOptional()
  email?: string

  @ApiPropertyOptional({ example: '1980-01-01' })
  @IsDateString()
  @IsOptional()
  dateOfBirth?: string

  @ApiPropertyOptional({ example: '2020-08-15' })
  @IsDateString()
  @IsOptional()
  hireDate?: string

  @ApiPropertyOptional({ example: 'active' })
  @IsString()
  @IsOptional()
  status?: string

  @ApiPropertyOptional({ example: '123 Main St, Anytown, USA' })
  @IsString()
  @IsOptional()
  address?: string

  @ApiPropertyOptional({ example: '+1234567890' })
  @IsString()
  @IsOptional()
  phoneNumber?: string

  @ApiPropertyOptional({ example: 'http://example.com/profile.jpg' })
  @IsString()
  @IsOptional()
  profilePicture?: string

  @ApiPropertyOptional({ example: 'Male' })
  @IsString()
  @IsOptional()
  gender?: string

  @ApiPropertyOptional({ example: 'PhD in Computer Science' })
  @IsString()
  @IsOptional()
  qualifications?: string

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  departmentId?: number

  @ApiPropertyOptional({ example: 'Additional notes about the teacher' })
  @IsString()
  @IsOptional()
  notes?: string

  @ApiPropertyOptional({ type: () => [ClassDto] })
  @IsOptional()
  classes?: ClassDto[]

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z' })
  @IsDateString()
  createdAt: Date

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z' })
  @IsDateString()
  updatedAt: Date

  constructor(partial: Partial<TeacherDto>) {
    Object.assign(this, partial)
  }
}
