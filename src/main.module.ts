import { Module } from '@nestjs/common';
import { ExampleController } from './example/example.controller';
import { ExampleService } from './example/example.service';

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class MainModule {}
