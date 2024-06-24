import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsDateString, IsNotEmpty } from 'class-validator'
import { TeacherDto } from '../../teachers/dtos/teacher.dto'
import { StudentDto } from '../../students/dtos/student.dto'

export class ClassDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Math 101' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: 1 })
  @IsInt()
  teacherId: number

  @ApiProperty({ type: TeacherDto })
  teacher: TeacherDto

  @ApiPropertyOptional({ type: [StudentDto] })
  students?: StudentDto[]

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z' })
  @IsDateString()
  createdAt: Date

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z' })
  @IsDateString()
  updatedAt: Date

  constructor(partial: Partial<ClassDto>) {
    Object.assign(this, partial)
  }
}
