import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsEmail, IsDateString } from 'class-validator'

export class UpdateStudentDto {
  @ApiPropertyOptional({ example: 'Jane Doe' })
  @IsString()
  @IsOptional()
  name?: string

  @ApiPropertyOptional({ example: 'jane.doe@example.com' })
  @IsEmail()
  @IsOptional()
  email?: string

  @ApiPropertyOptional({ example: '2000-01-01' })
  @IsDateString()
  @IsOptional()
  dateOfBirth?: string

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
}
