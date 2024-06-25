import { ApiPropertyOptional } from '@nestjs/swagger'

export class SortDto {
  @ApiPropertyOptional({ description: 'Field to sort by' })
  sortBy?: string

  @ApiPropertyOptional({ description: 'Sort direction (asc or desc)' })
  sortOrder?: 'asc' | 'desc'
}