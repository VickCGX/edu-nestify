import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsInt, IsDate } from 'class-validator'

export class UpdateSubmissionDto {
  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  studentId?: number

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  assignmentId?: number

  @ApiPropertyOptional({ example: 'http://example.com/submission.pdf' })
  @IsString()
  @IsOptional()
  submissionUrl?: string

  @ApiPropertyOptional({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  @IsOptional()
  submittedAt?: Date

  @ApiPropertyOptional({ example: 'submitted' })
  @IsString()
  @IsOptional()
  status?: string

  @ApiPropertyOptional({ example: 90 })
  @IsInt()
  @IsOptional()
  grade?: number

  @ApiPropertyOptional({ example: 'Good job!' })
  @IsString()
  @IsOptional()
  feedback?: string
}
