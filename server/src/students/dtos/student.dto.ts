import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsEmail, IsDateString, IsOptional, IsNotEmpty } from 'class-validator'
import { ClassDto } from '../../classes/dtos/class.dto'

export class StudentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Jane Doe' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiPropertyOptional({ example: 'jane.doe@example.com' })
  @IsEmail()
  email?: string

  @ApiPropertyOptional({ example: '2000-01-01' })
  @IsDateString()
  dateOfBirth: string

  @ApiProperty({ example: '2021-09-01' })
  @IsDateString()
  @IsNotEmpty()
  enrollmentDate: string

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

  @ApiPropertyOptional({ example: 'Female' })
  @IsString()
  @IsOptional()
  gender?: string

  @ApiPropertyOptional({ example: 'John Doe' })
  @IsString()
  @IsOptional()
  guardianName?: string

  @ApiPropertyOptional({ example: '+1234567890' })
  @IsString()
  @IsOptional()
  guardianContact?: string

  @ApiPropertyOptional({ example: 'Additional notes about the student' })
  @IsString()
  @IsOptional()
  notes?: string

  @ApiPropertyOptional({ type: [ClassDto] })
  @IsOptional()
  classes?: ClassDto[]

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z' })
  @IsDateString()
  createdAt: Date

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z' })
  @IsDateString()
  updatedAt: Date

  constructor(partial: Partial<StudentDto>) {
    Object.assign(this, partial)
  }
}
