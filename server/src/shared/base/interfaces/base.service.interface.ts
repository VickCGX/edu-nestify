import { FilterDto, PaginationDto, SortDto, PaginationResponse } from 'src/shared'

export interface IBaseService<TModel, TCreateDto, TUpdateDto> {
  findMany(filterDto?: FilterDto, paginationDto?: PaginationDto, sortDto?: SortDto): Promise<PaginationResponse<TModel>>
  findOne(id: number): Promise<TModel>
  create(createDto: TCreateDto): Promise<TModel>
  update(id: number, updateDto: TUpdateDto): Promise<TModel>
  remove(id: number): Promise<void>
}
