import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsInt, IsOptional, IsDate } from 'class-validator'

export class CreateSubmissionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  studentId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  assignmentId: number

  @ApiPropertyOptional({ example: 'http://example.com/submission.pdf' })
  @IsString()
  @IsOptional()
  submissionUrl?: string

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsNotEmpty()
  submittedAt: Date

  @ApiProperty({ example: 'submitted' })
  @IsString()
  @IsNotEmpty()
  status: string

  @ApiPropertyOptional({ example: 90 })
  @IsInt()
  @IsOptional()
  grade?: number

  @ApiPropertyOptional({ example: 'Good job!' })
  @IsString()
  @IsOptional()
  feedback?: string
}
