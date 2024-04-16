import { Injectable, Inject } from '@nestjs/common';
import { IExampleService, IExampleRepository } from './interfaces/example.interface';
import { ExampleRepository } from './repositories/example.repository';
import { PaginatedResponseExampleDto, ResponseExampleDto } from './dtos/example.dto';
import { PaginationDto } from 'src/dtos/pagination.dto';
import { FilterDto } from 'src/dtos/filter.dto';

@Injectable()
export class ExampleService implements IExampleService {
  constructor(
    @Inject(IExampleRepository)
    private exampleRepository: IExampleRepository
  ) { }

  async listAllExamples(pagination: PaginationDto, filter: FilterDto): Promise<PaginatedResponseExampleDto> {
    return await this.exampleRepository.findAllExamples(pagination, filter)
  }

  async listExampleById(id: string): Promise<object> {
    return await this.exampleRepository.findExampleById(id)
  }

  async createExample(dto: any): Promise<object> {
    return await this.exampleRepository.createExample(dto)
  }

  async updateExample(id: string, dto: any): Promise<object> {
    return await this.exampleRepository.updateExample(id, dto)
  }

  async deleteExample(id: string): Promise<void> {
    return await this.exampleRepository.deleteExample(id)
  }

}