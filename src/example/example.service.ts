import { BadRequestException, Injectable } from '@nestjs/common';
import { ExampleRepository } from './repository/example.repository';

interface ExampleType {
  id: number;
  name: string;
  description: string;
}

@Injectable()
export class ExampleService {
  constructor(private exampleRepository: ExampleRepository) {}

  async listAllExamples(): Promise<ExampleType[]> {
    return await this.exampleRepository.findAll();
  }
}
