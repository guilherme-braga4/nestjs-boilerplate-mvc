import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleRepository {
  constructor() {}

  async findAll(): Promise<any> {
    // Change the mock by the real database implementation
    return [
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
  }
}
