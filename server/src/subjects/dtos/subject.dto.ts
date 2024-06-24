import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator'
import { ModuleDto } from '../../modules/dtos/module.dto'
import { TeacherDto } from '../../teachers/dtos/teacher.dto'

export class SubjectDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number

  @ApiProperty({ example: 'Computer Science' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiPropertyOptional({ example: 'This subject covers the fundamentals of computer science.' })
  @IsString()
  @IsOptional()
  description?: string

  @ApiPropertyOptional({ type: [ModuleDto] })
  @IsOptional()
  modules?: ModuleDto[]

  @ApiPropertyOptional({ type: [TeacherDto] })
  @IsOptional()
  teachers?: TeacherDto[]

  constructor(partial: Partial<SubjectDto>) {
    Object.assign(this, partial)
  }
}
