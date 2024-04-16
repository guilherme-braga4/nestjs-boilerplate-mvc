import { PaginationDto } from "src/dtos/pagination.dto"
import { PaginatedResponseExampleDto, ResponseExampleDto } from "../dtos/example.dto"
import { FilterDto } from "src/dtos/filter.dto"

export interface IExampleService {
    listAllExamples(pagination?: PaginationDto, filter?: FilterDto): Promise<PaginatedResponseExampleDto>
    listExampleById(id: string): Promise<object>
    createExample(dto: any): Promise<object>
    updateExample(id: string, dto: any): Promise<object>
    deleteExample(id: string): Promise<void>
}

export interface IExampleRepository {
    findAllExamples(pagination?: PaginationDto, filter?: FilterDto): Promise<PaginatedResponseExampleDto>
    findExampleById(id: string): Promise<object>
    createExample(dto: any): Promise<object>
    updateExample(id: string, dto: any): Promise<object>
    deleteExample(id: string): Promise<void>
}

export const IExampleService = Symbol("IExampleService");
export const IExampleRepository = Symbol("IExampleRepository");