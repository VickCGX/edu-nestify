import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsDate } from 'class-validator'
import { ClassDto } from '../../classes/dtos/class.dto'
import { SubjectDto } from '../../subjects/dtos/subject.dto'

export class TimetableDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 1 })
  @IsInt()
  classId: number

  @ApiProperty({ example: 'Monday' })
  @IsString()
  day: string

  @ApiProperty({ example: '2024-01-01T08:00:00.000Z' })
  @IsDate()
  startTime: Date

  @ApiProperty({ example: '2024-01-01T09:00:00.000Z' })
  @IsDate()
  endTime: Date

  @ApiProperty({ example: 1 })
  @IsInt()
  subjectId: number

  @ApiProperty({ type: () => ClassDto })
  class: ClassDto

  @ApiProperty({ type: () => SubjectDto })
  subject: SubjectDto

  constructor(partial: Partial<TimetableDto>) {
    Object.assign(this, partial)
  }
}
