import { ApiProperty } from '@nestjs/swagger'
import { IsInt } from 'class-validator'
import { StudentDto } from '../../students/dtos/student.dto'
import { QuizDto } from '../../quizzes/quiz/dtos/quiz.dto'

export class ScoreDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 90 })
  @IsInt()
  marks: number

  @ApiProperty({ example: 1 })
  @IsInt()
  studentId: number

  @ApiProperty({ example: 1 })
  @IsInt()
  quizId: number

  @ApiProperty({ type: () => StudentDto })
  student: StudentDto

  @ApiProperty({ type: () => QuizDto })
  quiz: QuizDto

  constructor(partial: Partial<ScoreDto>) {
    Object.assign(this, partial)
  }
}
