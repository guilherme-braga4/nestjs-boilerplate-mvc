import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { mockExamples } from './mocks/mock';
import { ExampleRepository } from './repository/example.repository';

describe('ExampleService', () => {
  let service: ExampleService;

  const mockRepository = {
    findAll: jest.fn().mockResolvedValue(mockExamples),
  };

  //Config the service or injectables (service/repository)
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExampleService,
        {
          provide: ExampleRepository,
          useValue: mockRepository,
        },
      ],
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
    const findAllRepository = jest
      .spyOn(mockRepository, 'findAll')
      .mockResolvedValue(mockExamples);

    const examples = await service.listAllExamples();

    expect(examples).toEqual(mockExamples);
    expect(examples).toHaveLength(2);

    expect(findAllRepository).toHaveBeenCalled();
    expect(findAllRepository).toBeCalledTimes(1);
  });
});
