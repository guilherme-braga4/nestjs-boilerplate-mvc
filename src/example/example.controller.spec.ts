import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

describe('ExampleController', () => {
  let controller: ExampleController;

  //Config the controller or injectables (service/repository)
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
    }).compile();

    //Instance of controller or injectables
    controller = module.get<ExampleController>(ExampleController);
  });

  //Verify if controller/injectables instance are valid
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //Bellow is following all tests related to the specific business rules
  /* Steps: 
    Red: Write a failing test. This test should capture the behavior you're implementing but does not have corresponding code to make it pass.
    Green: Write the minimum code necessary to make the failing test pass. Focus on just making the test pass without adding unnecessary complexity.
    Blue: Refactor the code. After the test is passing, you can refactor the code to improve its structure, readability, or efficiency. Ensure the test continues to pass after refactoring.
  */

  it('should list all examples', () => {});
});
