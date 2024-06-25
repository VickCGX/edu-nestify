import { FilterDto, FilterOperator, SortDto } from '.'
import { PaginationDto, PaginationResponse } from '../pagination'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '../constants'
import { PrismaService } from '../../../prisma/prisma.service'

export async function findWithFiltersAndPagination<T>(
  prisma: PrismaService,
  model: string,
  filterDto?: FilterDto,
  paginationDto?: PaginationDto,
  sortDto?: SortDto,
  include?: Object
): Promise<PaginationResponse<T>> {
  const where = {}
  const orderBy = {}

  // Handle filters
  if (filterDto && filterDto.filters.length) {
    filterDto.filters.forEach(criterion => {
      const { field, operator, value } = criterion
      switch (operator) {
        case FilterOperator.EQUALS:
          where[field] = value
          break
        case FilterOperator.CONTAINS:
          where[field] = { contains: value }
          break
        case FilterOperator.STARTS_WITH:
          where[field] = { startsWith: value }
          break
        case FilterOperator.ENDS_WITH:
          where[field] = { endsWith: value }
          break
        case FilterOperator.LT:
          where[field] = { lt: value }
          break
        case FilterOperator.LTE:
          where[field] = { lte: value }
          break
        case FilterOperator.GT:
          where[field] = { gt: value }
          break
        case FilterOperator.GTE:
          where[field] = { gte: value }
          break
      }
    })
  }

  let skip = undefined
  let take = undefined
  let page = DEFAULT_PAGE
  let pageSize = DEFAULT_PAGE_SIZE

  // Handle pagination
  if (paginationDto && paginationDto.page !== undefined && paginationDto.limit !== undefined) {
    skip = paginationDto.page * paginationDto.limit
    take = paginationDto.limit
    page = paginationDto.page
    pageSize = paginationDto.limit
  }

  // Handle sorting
  if (sortDto && sortDto.sortBy && sortDto.sortOrder) {
    orderBy[sortDto.sortBy] = sortDto.sortOrder
  }

  const data = prisma[model].findMany({
    where,
    skip,
    take,
    orderBy,
    include
  })

  // Count total records that match the filter criteria
  const totalRecords = await prisma[model].count({ where })

  return new PaginationResponse<T>(data, totalRecords, page, pageSize)
}
