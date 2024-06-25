import { Injectable, NotFoundException } from '@nestjs/common'
import { PaginationDto, PaginationResponse, SortDto, FilterDto, findWithFiltersAndPagination } from 'src/shared'
import { PrismaService } from '../../../prisma/prisma.service'
import { IBaseService } from 'src/shared/base/interfaces/base.service.interface'

@Injectable()
export abstract class BaseService<TModel, TCreateDto, TUpdateDto>
  implements IBaseService<TModel, TCreateDto, TUpdateDto>
{
  constructor(
    protected prisma: PrismaService,
    private modelTableName: string,
    private include?: Object
  ) {}

  async findMany(
    filterDto?: FilterDto,
    paginationDto?: PaginationDto,
    sortDto?: SortDto
  ): Promise<PaginationResponse<TModel>> {
    return findWithFiltersAndPagination<TModel>(
      this.prisma,
      this.modelTableName,
      filterDto,
      paginationDto,
      sortDto,
      this.include
    )
  }

  async findOne(id: number): Promise<TModel> {
    const model = await this.prisma[this.modelTableName].findUnique({
      where: { id: parseInt(id.toString()) },
      include: this.include
    })
    if (!model) {
      throw new NotFoundException(`${this.modelTableName} #${id} not found`)
    }
    return model
  }

  async create(createDto: TCreateDto): Promise<TModel> {
    return this.prisma[this.modelTableName].create({
      data: createDto
    })
  }

  async update(id: number, updateDto: TUpdateDto): Promise<TModel> {
    try {
      return await this.prisma[this.modelTableName].update({
        where: { id },
        data: updateDto
      })
    } catch (error) {
      throw new NotFoundException(`${this.modelTableName} #${id} not found`)
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.prisma[this.modelTableName].delete({
        where: { id }
      })
    } catch (error) {
      throw new NotFoundException(`${this.modelTableName} #${id} not found`)
    }
  }
}
