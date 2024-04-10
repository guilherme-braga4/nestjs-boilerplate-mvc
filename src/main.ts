import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { MainModule } from './main.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const config = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription('The example API description')
    .setVersion('1.0.0')
    .addTag('examples')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  app.enableCors();
  await app.listen(port);
}
bootstrap();
