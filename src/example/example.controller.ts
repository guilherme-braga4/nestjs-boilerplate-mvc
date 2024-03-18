import { BadRequestException, Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller()
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) { }

  @Get()
  async getAllExamples(): Promise<any> {
    return await this.exampleService.listAllExamples();
  }
}
