import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { INestApplication } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 5001
    }
  });
  await app.startAllMicroservices();
  await app.listen(5001);
}
bootstrap();
