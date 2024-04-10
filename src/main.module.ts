import { Module } from '@nestjs/common';
import { ExampleController } from './example/example.controller';
import { ExampleService } from './example/example.service';
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
export class MainModule {}
