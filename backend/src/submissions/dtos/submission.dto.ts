import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsDate, IsOptional } from 'class-validator'
import { StudentDto } from '../../students/dtos/student.dto'
import { AssignmentDto } from '../../assignments/dtos/assignment.dto'

export class SubmissionDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 1 })
  @IsInt()
  studentId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  assignmentId: number

  @ApiPropertyOptional({ example: 'http://example.com/submission.pdf' })
  @IsString()
  @IsOptional()
  submissionUrl?: string

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  submittedAt: Date

  @ApiProperty({ example: 'submitted' })
  @IsString()
  status: string

  @ApiPropertyOptional({ example: 90 })
  @IsInt()
  @IsOptional()
  grade?: number

  @ApiPropertyOptional({ example: 'Good job!' })
  @IsString()
  @IsOptional()
  feedback?: string

  @ApiProperty({ type: () => StudentDto })
  student: StudentDto

  @ApiProperty({ type: () => AssignmentDto })
  assignment: AssignmentDto

  constructor(partial: Partial<SubmissionDto>) {
    Object.assign(this, partial)
  }
}
