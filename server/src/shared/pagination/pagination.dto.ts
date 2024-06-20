import { IsOptional, IsInt, Min } from 'class-validator'
import { Transform } from 'class-transformer'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '../constants/index'

export class PaginationDto {
  @ApiPropertyOptional({ description: 'Current page number' })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(0)
  page?: number = DEFAULT_PAGE

  @ApiPropertyOptional({ description: 'Number of items per page' })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  limit?: number = DEFAULT_PAGE_SIZE
}