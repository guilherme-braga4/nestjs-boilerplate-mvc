export interface ExampleServiceInterface {
    listAllExamples(): Promise<object[]>
    listExampleById(id: string): Promise<object>
    createExample(dto: any): Promise<object>
    updateExample(id: string, dto: any): Promise<object>
    deleteExample(id: string): Promise<void>
}

export interface ExampleRepositoryInterface {
    findAllExamples(): Promise<object[]>
    findExampleById(id: string): Promise<object>
    createExample(dto: any): Promise<object>
    updateExample(id: string, dto: any): Promise<object>
    deleteExample(id: string): Promise<void>
}
