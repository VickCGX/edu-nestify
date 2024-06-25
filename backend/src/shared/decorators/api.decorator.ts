import { applyDecorators, Type, HttpStatus, HttpCode } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger'
import { FilterDto, PaginationDto, SortDto } from 'src/shared'

export function ApiOperationSummary(summary: string) {
  return applyDecorators(ApiOperation({ summary }))
}

export function ApiResponseModel<TModel>(model: Type<TModel>, successStatus: HttpStatus = HttpStatus.OK) {
  const successDescription =
    successStatus === HttpStatus.CREATED
      ? 'Resource successfully created.'
      : successStatus === HttpStatus.NO_CONTENT
        ? 'Resource deleted successfully.'
        : 'Operation successful.'

  return applyDecorators(
    ApiResponse({ status: successStatus, description: successDescription, type: model }),
    ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input' }),
    ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Resource not found.' }),
    ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input' })
  )
}

export function ApiResponseArrayModel<TModel>(model: Type<TModel>, successStatus: HttpStatus = HttpStatus.OK) {
  const successDescription =
    successStatus === HttpStatus.CREATED
      ? 'Resource successfully created.'
      : successStatus === HttpStatus.NO_CONTENT
        ? 'Resource deleted successfully.'
        : 'Operation successful.'

  return applyDecorators(
    ApiResponse({ status: successStatus, description: successDescription, type: model }),
    ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input' }),
    ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Resource not found.' }),
    ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input' })
  )
}

export function ApiQueryOptions() {
  return applyDecorators(
    ApiQuery({ name: 'filter', type: FilterDto, required: false, description: 'Filter options' }),
    ApiQuery({ name: 'pagination', type: PaginationDto, required: false, description: 'Pagination options' }),
    ApiQuery({ name: 'sort', type: SortDto, required: false, description: 'Sort options' })
  )
}

export function HttpStatusCode(status: HttpStatus) {
  return applyDecorators(HttpCode(status))
}
