import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  console.log(port);
  await app.listen(port);
}
bootstrap();
