import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { mockExamples } from './mocks/mock';

describe('ExampleController', () => {
  let controller: ExampleController;
  let service: ExampleService;

  const serviceMock = {
    listAllExamples: jest.fn().mockResolvedValue(mockExamples),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [
        {
          provide: ExampleService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
    service = module.get<ExampleService>(ExampleService);
  });

  it('Controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('listAll', () => {
    // ------->>>>>>  Happy path
    it('should list all examples', async () => {
      // ***arrangements***
      const controllerFindAll = await controller.getAllExamples();

      // ***assertions***
      expect(controllerFindAll).toHaveLength(2);
      expect(controllerFindAll).toEqual(mockExamples);
    });

    // ------->>>>>> Exceptions
    it('should throw error when return a empty array', async () => {
      // ***arrangements***
      jest.spyOn(service, 'listAllExamples').mockRejectedValueOnce(new Error());

      // ***assertions***
      expect(controller.getAllExamples()).rejects.toThrowError();
    });
  });
});
