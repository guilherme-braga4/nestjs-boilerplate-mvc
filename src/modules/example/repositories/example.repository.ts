import { AbstractRepository } from "src/repositories/abstract.repository";
import { PrismaRepository } from "src/repositories/prisma.repository";
import { Example } from '@prisma/client'
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ExampleRepository extends PrismaRepository<Example> {
    constructor(prisma: PrismaService) {
        super('Example', prisma);
    }

    async findAllExamples() {
        return this.findAll()
    }

    async findExampleById(id: string) {
        return this.findById(id)
    }

    async createExample(data: Example) {
        return this.create(data)
    }

    async updateExample(id: string, data: Partial<Example>) {
        return this.update(id, data)
    }

    async deleteExample(id: string) {
        return this.delete(id)
    }
}