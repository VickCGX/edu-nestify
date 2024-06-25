import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsDate } from 'class-validator'
import { AssignmentDto } from '../../assignments/dtos/assignment.dto'
import { QuizDto } from '../../quizzes/quiz/dtos/quiz.dto'
import { StudentDto } from '../../students/dtos/student.dto'
import { TeacherDto } from '../../teachers/dtos/teacher.dto'

export class FeedbackDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Great job on the assignment!' })
  @IsString()
  content: string

  @ApiProperty({ example: 1 })
  @IsInt()
  assignmentId?: number

  @ApiProperty({ example: 1 })
  @IsInt()
  quizId?: number

  @ApiProperty({ example: 1 })
  @IsInt()
  studentId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  teacherId: number

  @ApiProperty({ type: () => AssignmentDto })
  assignment?: AssignmentDto

  @ApiProperty({ type: () => QuizDto })
  quiz?: QuizDto

  @ApiProperty({ type: () => StudentDto })
  student: StudentDto

  @ApiProperty({ type: () => TeacherDto })
  teacher: TeacherDto

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  createdAt: Date

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDate()
  updatedAt: Date

  constructor(partial: Partial<FeedbackDto>) {
    Object.assign(this, partial)
  }
}
