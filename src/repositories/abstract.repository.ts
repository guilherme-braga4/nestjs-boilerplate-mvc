import { AbstractInterface } from "src/interfaces/abstract.interface";
import { AbstractOrmRepository } from "./abstractDatabase.repository";

export abstract class AbstractRepository extends AbstractOrmRepository implements AbstractInterface {
    super() { }

    async findAll(filter?: any, pagination?: any): Promise<any> {
        // Herda os métodos da classe responsável pelo ORM
        this.findAll(filter, pagination)
    }
}