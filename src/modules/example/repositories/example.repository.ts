import { PrismaRepository } from "src/repositories/prisma.repository";
import { Example } from '@prisma/client'
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { IExampleRepository } from "../interfaces/example.interface";
import { PaginatedResponseExampleDto, ResponseExampleDto } from "../dtos/example.dto";
import { PaginationDto } from "src/dtos/pagination.dto";
import { FilterDto } from "src/dtos/filter.dto";

@Injectable()
export class ExampleRepository extends PrismaRepository<Example> implements IExampleRepository {
    constructor(prisma: PrismaService) {
        super('Example', prisma);
    }

    async findAllExamples(pagination: PaginationDto, filter: FilterDto): Promise<PaginatedResponseExampleDto> {
        return await this.findAll(pagination, filter)
    }

    async findExampleById(id: string) {
        return await this.findById(id)
    }

    async createExample(data: Example) {
        return await this.create(data)
    }

    async updateExample(id: string, data: Partial<Example>) {
        return await this.update(id, data)
    }

    async deleteExample(id: string) {
        return await this.delete(id)
    }
}