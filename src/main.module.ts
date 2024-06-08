import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExampleModule } from './modules/example/example.module';
import { AppInterceptor } from './exceptions/global.exception';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
      isGlobal: true,
    }),
    ExampleModule
  ],
  providers: [ConfigService, {
    provide: APP_INTERCEPTOR,
    useClass: AppInterceptor
  }],
  exports: [ConfigService],
})
export class MainModule { }
