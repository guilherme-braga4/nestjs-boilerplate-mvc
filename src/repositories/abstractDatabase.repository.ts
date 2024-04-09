//Responsible Class by ORMs: TypeORM / Prisma / etc

import { AbstractOrmInterface } from "src/interfaces/abstract.interface";

export abstract class AbstractOrmRepository implements AbstractOrmInterface {
    constructor() { }

    async findAll(filter?: any, page?: any): Promise<any> {
        // ORM Query
    }
}
