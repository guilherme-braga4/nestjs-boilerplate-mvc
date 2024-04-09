import { BadRequestException, Injectable } from '@nestjs/common';
import { ExampleInterface } from './interfaces/example.interface';

interface ExampleType {
  id: number;
  name: string;
  description: string;
}

@Injectable()
export class ExampleService implements ExampleInterface {
  constructor() { }

  async listAllExamples(): Promise<object[]> {
    const mock = [
      {
        id: 1,
        name: 'ExampleName',
        description: 'This is an example',
      },
      {
        id: 2,
        name: 'ExampleName2',
        description: 'This is an example 2',
      },
    ];
    return mock;
  }
}
