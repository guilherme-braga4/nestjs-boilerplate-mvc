import { AbstractRepository } from "src/repositories/abstract.repository";

export class ExampleRepository extends AbstractRepository {
    super() { }

    async findAllExamples() {
        return this.findAll()
    }
}