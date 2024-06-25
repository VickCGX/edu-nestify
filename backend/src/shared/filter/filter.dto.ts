import { IsEnum, IsString, ValidateNested, IsArray } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export enum FilterOperator {
  EQUALS = 'equals',
  CONTAINS = 'contains',
  STARTS_WITH = 'startsWith',
  ENDS_WITH = 'endsWith',
  LT = 'lt',
  LTE = 'lte',
  GT = 'gt',
  GTE = 'gte'
}

class FilterCriterionDto {
  @IsString()
  @ApiProperty({ description: 'The field to apply the filter on', example: 'name' })
  field: string

  @IsEnum(FilterOperator)
  @ApiProperty({
    description: 'The operator to use for the filtering',
    enum: FilterOperator,
    example: FilterOperator.CONTAINS
  })
  operator: FilterOperator

  @IsString()
  @ApiProperty({ description: 'The value to compare against', example: 'Acme' })
  value: string
}

export class FilterDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilterCriterionDto)
  @ApiProperty({
    description: 'A list of filter criteria',
    type: [FilterCriterionDto],
    isArray: true,
    example: [{ field: 'name', operator: FilterOperator.CONTAINS, value: 'Acme' }]
  })
  filters: FilterCriterionDto[]
}