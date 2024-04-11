// These repository is decoupled from ORMs

export abstract class AbstractRepository<T> {
    protected abstract findAll(filter?: any, pagination?: any): Promise<T[]>;
    protected abstract findById(id: string): Promise<T | null>;
    protected abstract create(data: Partial<T>): Promise<T>;
    protected abstract update(id: string, data: Partial<T>): Promise<T | null>;
    protected abstract delete(id: string): Promise<void>;
}
