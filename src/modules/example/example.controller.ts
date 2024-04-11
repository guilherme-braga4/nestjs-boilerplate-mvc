import { BadRequestException, Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ExampleServiceInterface } from './interfaces/example.interface';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleServiceInterface) { }

  @Get()
  async getAllExamples(): Promise<any> {
    return await this.exampleService.listAllExamples();
  }

  @Get(':id')
  async getExampleById(@Param('id') id: string): Promise<object> {
    return await this.exampleService.listExampleById(id);
  }

  @Post()
  async createExample(@Body() dto: any): Promise<object> {
    return await this.exampleService.createExample(dto);
  }

  @Put(':id')
  async updateExample(@Param('id') id: string, @Body() dto: any): Promise<object> {
    return await this.exampleService.updateExample(id, dto);
  }

  @Delete(':id')
  async deleteExample(@Param('id') id: string): Promise<void> {
    return await this.exampleService.deleteExample(id);
  }
}
