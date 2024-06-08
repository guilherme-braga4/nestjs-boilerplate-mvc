//Responsible Class by ORMs: TypeORM / Prisma / etc
//You can implement any ORM you wanna

import { PaginationDto } from 'src/dtos/pagination.dto';
import { PrismaService } from '../database/prisma.service';
import { AbstractRepository } from './abstract.repository';
import { FilterDto } from 'src/dtos/filter.dto';
import { BadRequestException } from '@nestjs/common';

// <T> é indica uma classe com tipo genérico
// A classe que implementar o PrismaRepository necessita passar o tipo genérico, por ex: class UserRepository extends PrismaRepository<User>

export class PrismaRepository<T> extends AbstractRepository<T> {
    private readonly modelName: string;
    private readonly prisma: PrismaService;

    protected constructor(modelName: string, prisma: PrismaService) {
        super();
        this.modelName = modelName
        this.prisma = prisma
    }

    protected async findAll({ page, pageSize, limit }: PaginationDto, { filterName, filterValue }: FilterDto): Promise<{ data: T[], page: number, pageSize: number, totalPages: number, totalData: number }> {
        let query: any = {};

        if (filterName && filterValue) {
            query[filterName] = { contains: filterValue };
        }

        const skip = (page - 1) * pageSize;
        const paginationOptions = {
            skip,
            take: Number(pageSize)
        };
        const data = await this.prisma[this.modelName].findMany({
            where: query,
            ...paginationOptions
        });

        const totalData = await this.prisma[this.modelName].count({ where: query });
        const totalPages = Math.ceil(totalData / pageSize);

        return {
            data,
            page,
            pageSize,
            totalPages,
            totalData
        };
    }

    protected async findById(id: string): Promise<T | null> {
        const item = await this.prisma[this.modelName].findUnique({
            where: { id: parseInt(id) },
        });
        if (!item) {
            throw new BadRequestException('No register found!')
        }
        return item || null;
    }

    protected async create(data: Partial<T>): Promise<T> {
        return await this.prisma[this.modelName].create({ data });
    }

    protected async update(id: string, data: Partial<T>): Promise<T | null> {
        const updatedItem = await this.prisma[this.modelName].update({
            where: { id: parseInt(id) },
            data,
        });
        return updatedItem || null;
    }

    protected async delete(id: string): Promise<void> {
        await this.prisma[this.modelName].delete({ where: { id: parseInt(id) } });
    }
}
