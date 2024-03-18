import { BadRequestException, Injectable } from '@nestjs/common';

interface ExampleType {
    id: number,
    name: string,
    description: string
}

@Injectable()
export class ExampleService {
    constructor() { }

    async listAllExamples(): Promise<ExampleType[]> {
        const mock = [{
            id: 1,
            name: 'ExampleName',
            description: 'This is an example'
        },
        {
            id: 2,
            name: 'ExampleName2',
            description: 'This is an example 2'
        }]
        return mock;
    }
}
