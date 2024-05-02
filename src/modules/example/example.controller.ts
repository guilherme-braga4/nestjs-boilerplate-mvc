import { BadRequestException, Controller, Get, Post, Param, Body, Put, Delete, Inject, Query } from '@nestjs/common';
import { IExampleService } from './interfaces/example.interface';
import { PaginationDto } from 'src/dtos/pagination.dto';
import { FilterDto } from 'src/dtos/filter.dto';
import { PaginatedResponseExampleDto, RequestExampleDto, ResponseExampleDto, UpdateExampleDto } from './dtos/example.dto';
import { ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('example')
export class ExampleController {
  constructor(
    @Inject(IExampleService)
    private readonly exampleService: IExampleService
  ) { }

  @Get()
  async getAllExamples(@Query() pagination?: PaginationDto, @Query() filter?: FilterDto): Promise<PaginatedResponseExampleDto> {
    return await this.exampleService.listAllExamples(pagination, filter);
  }

  @Get(':id')
  async getExampleById(@Param('id') id: string): Promise<object> {
    return await this.exampleService.listExampleById(id);
  }

  @Post()
  @ApiBadRequestResponse()
  async createExample(@Body() dto: RequestExampleDto): Promise<object> {
    return await this.exampleService.createExample(dto);
  }

  @Put(':id')
  async updateExample(@Param('id') id: string, @Body() dto: UpdateExampleDto): Promise<object> {
    return await this.exampleService.updateExample(id, dto);
  }

  @Delete(':id')
  async deleteExample(@Param('id') id: string): Promise<void> {
    return await this.exampleService.deleteExample(id);
  }
}
