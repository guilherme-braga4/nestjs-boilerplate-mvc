export interface AbstractInterface {
    findAll(filter?: any, pagination?: any): Promise<any>
}

export interface AbstractOrmInterface {
    findAll(filter?: any, pagination?: any): Promise<any>
}