export interface IExampleService {
    listAllExamples(): Promise<object[]>
    listExampleById(id: string): Promise<object>
    createExample(dto: any): Promise<object>
    updateExample(id: string, dto: any): Promise<object>
    deleteExample(id: string): Promise<void>
}

export interface IExampleRepository {
    findAllExamples(): Promise<object[]>
    findExampleById(id: string): Promise<object>
    createExample(dto: any): Promise<object>
    updateExample(id: string, dto: any): Promise<object>
    deleteExample(id: string): Promise<void>
}

export const IExampleService = Symbol("IExampleService");
export const IExampleRepository = Symbol("IExampleRepository");