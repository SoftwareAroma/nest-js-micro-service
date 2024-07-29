import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);
  await app.listen(5000);
}
bootstrap();
