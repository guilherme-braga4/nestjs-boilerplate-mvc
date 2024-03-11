import { Injectable } from '@nestjs/common';

interface ExampleType {
    id: number,
    name: string,
    description: string
}

@Injectable()
export class ExampleService {
    constructor() { }

    listAllExamples(): ExampleType[] {
        return [{
            id: 1,
            name: 'ExampleName',
            description: 'This is an example'
        },
        {
            id: 2,
            name: 'ExampleName2',
            description: 'This is an example 2'
        }]
    }
}
