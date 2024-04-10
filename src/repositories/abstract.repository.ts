// These repository is decoupled from ORMs

export abstract class AbstractRepository<T> {
    abstract findAll(filter?: any, pagination?: any): Promise<T[]>;
    abstract findById(id: string): Promise<T | null>;
    abstract create(data: Partial<T>): Promise<T>;
    abstract update(id: string, data: Partial<T>): Promise<T | null>;
    abstract delete(id: string): Promise<void>;
}
