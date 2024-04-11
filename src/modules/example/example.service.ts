import { Injectable, Inject } from '@nestjs/common';
import { ExampleServiceInterface, ExampleRepositoryInterface } from './interfaces/example.interface';
import { ExampleRepository } from './repositories/example.repository';

@Injectable()
export class ExampleService implements ExampleServiceInterface {
  constructor(
    private exampleRepository: ExampleRepositoryInterface
  ) { }

  async listAllExamples(): Promise<object[]> {
    return await this.exampleRepository.findAllExamples()
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