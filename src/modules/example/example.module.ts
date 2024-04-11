import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { ExampleRepository } from './repositories/example.repository';

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [
    ExampleService,
    {
      provide: 'ExampleServiceInterface', // Token de injeção como string
      useClass: ExampleService,
    },
    ExampleRepository,
    {
      provide: 'ExampleRepositoryInterface', // Token de injeção como string
      useClass: ExampleRepository,
    },
  ],
  exports: [ExampleService]
})
export class ExampleModule { }
