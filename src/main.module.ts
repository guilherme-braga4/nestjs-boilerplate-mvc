import { Module } from '@nestjs/common';
import { ExampleController } from './modules/example/example.controller';
import { ExampleService } from './modules/example/example.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
      isGlobal: true,
    }),
  ],
  controllers: [ExampleController],
  providers: [ConfigService, ExampleService],
  exports: [ConfigService],
})
export class MainModule { }
