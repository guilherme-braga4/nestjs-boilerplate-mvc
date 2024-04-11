//Responsible Class by ORMs: TypeORM / Prisma / etc
//You can implement any ORM you wanna

import { PrismaService } from '../database/prisma.service';
import { AbstractRepository } from './abstract.repository';

// <T> é indica uma classe com tipo genérico
// A classe que implementar o PrismaRepository necessita passar o tipo genérico, por ex: class UserRepository extends PrismaRepository<User>

export class PrismaRepository<T> extends AbstractRepository<T> {
    private readonly modelName: string;
    private readonly prisma: PrismaService;

    constructor(modelName: string, prisma: PrismaService) {
        super();
        this.modelName = modelName
        this.prisma = prisma
    }

    async findAll(): Promise<T[]> {
        //TO DO: Pagination
        //TO DO: Filter

        return await this.prisma[this.modelName].findMany();
    }

    async findById(id: string): Promise<T | null> {
        const item = await this.prisma[this.modelName].findUnique({
            where: { id: parseInt(id) },
        });
        return item || null;
    }

    async create(data: Partial<T>): Promise<T> {
        return await this.prisma[this.modelName].create({ data });
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        const updatedItem = await this.prisma[this.modelName].update({
            where: { id: parseInt(id) },
            data,
        });
        return updatedItem || null;
    }

    async delete(id: string): Promise<void> {
        await this.prisma[this.modelName].delete({ where: { id: parseInt(id) } });
    }
}
