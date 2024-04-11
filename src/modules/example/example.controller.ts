import { BadRequestException, Controller, Get } from '@nestjs/common';
import { ExampleServiceInterface } from './interfaces/example.interface';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleServiceInterface) { }

  @Get()
  async getAllExamples(): Promise<any> {
    return await this.exampleService.listAllExamples();
  }
}
