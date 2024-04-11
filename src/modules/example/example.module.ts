import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { ExampleRepository } from './repositories/example.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { IExampleRepository } from './interfaces/example.interface'

@Module({
  imports: [PrismaModule],
  controllers: [ExampleController],
  providers: [
    ExampleService,
    {
      provide: 'IExampleService', // Token de injeção como string
      useClass: ExampleService,
    },
    ExampleRepository,
    {
      provide: 'IExampleRepository', // Token de injeção como string
      useClass: ExampleRepository,
    },
  ],
  exports: [ExampleService]
})
export class ExampleModule { }