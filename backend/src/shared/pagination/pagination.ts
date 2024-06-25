import { ApiProperty } from '@nestjs/swagger'

export interface IPaginationResponse<T> {
  data: T[]
  totalRecords: number
  page: number
  pageSize: number
}

export class PaginationResponse<T> implements IPaginationResponse<T> {
  @ApiProperty({
    description: 'Array of data items for the current page.',
    example: [
      { id: 1, name: 'Item One' },
      { id: 2, name: 'Item Two' }
    ],
    isArray: true,
    type: 'array'
  })
  data: T[]

  @ApiProperty({
    description: 'Total number of records available.',
    example: 100
  })
  totalRecords: number

  @ApiProperty({
    description: 'Current page number.',
    example: 1
  })
  page: number

  @ApiProperty({
    description: 'Number of records per page.',
    example: 10
  })
  pageSize: number

  constructor(data: T[], totalRecords: number, page: number, pageSize: number) {
    this.data = data
    this.totalRecords = totalRecords
    this.page = page
    this.pageSize = pageSize
  }

  @ApiProperty({
    description: 'Total number of pages available.',
    example: 10
  })
  getTotalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize)
  }
}