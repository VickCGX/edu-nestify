import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsDate, IsOptional } from 'class-validator'
import { SubmissionDto } from '../../submissions/dtos/submission.dto'

export class AssignmentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Math Homework' })
  @IsString()
  title: string

  @ApiPropertyOptional({ example: 'Solve the problems in the attached sheet' })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  dueDate: Date

  @ApiProperty({ example: 'pending' })
  @IsString()
  status: string

  @ApiProperty({ example: 1 })
  @IsInt()
  classId: number

  @ApiPropertyOptional({ type: () => [SubmissionDto] })
  submissions?: SubmissionDto[]

  constructor(partial: Partial<AssignmentDto>) {
    Object.assign(this, partial)
  }
}
