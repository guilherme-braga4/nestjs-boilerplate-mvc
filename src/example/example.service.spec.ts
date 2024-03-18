import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  //Config the service or injectables (service/repository)
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [ExampleService],
    }).compile();

    //Instance of service or injectables
    service = module.get<ExampleService>(ExampleService);
  });

  //Verify if service/injectables instance are valid
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //Bellow is following all tests related to the specific business rules
  /* Steps: 
    Red: Write a failing test. This test should capture the behavior you're implementing but does not have corresponding code to make it pass.
    Green: Write the minimum code necessary to make the failing test pass. Focus on just making the test pass without adding unnecessary complexity.
    Blue: Refactor the code. After the test is passing, you can refactor the code to improve its structure, readability, or efficiency. Ensure the test continues to pass after refactoring.
  */

  it('should list all examples', async () => {
    // Red: Write a failing test
    const exampleObject = [{
      id: 1,
      name: 'ExampleName',
      description: 'This is an example'
    },
    {
      id: 2,
      name: 'ExampleName2',
      description: 'This is an example 2'
    }]
    const examples = await service.listAllExamples();
    expect(examples).toEqual(exampleObject);
    expect(examples).toHaveLength(2);
  });
});


