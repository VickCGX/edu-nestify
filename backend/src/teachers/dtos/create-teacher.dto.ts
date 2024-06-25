import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsEmail, IsOptional, IsDateString } from 'class-validator'

export class CreateTeacherDto {
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
  @IsOptional()
  departmentId?: number

  @ApiPropertyOptional({ example: 'Additional notes about the teacher' })
  @IsString()
  @IsOptional()
  notes?: string
}
