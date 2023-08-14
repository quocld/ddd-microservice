import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { v4 as uuid } from 'uuid';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  // Create microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:9093'],
      },
      consumer: {
        groupId: `user.${uuid()}`,
      },
    },
  });
  

  // Start all microservices
  await app.startAllMicroservices().then(() => {
    console.log('App microservices started');
  })

  // Listen to HTTP requests
  await app.listen(4001, () => {
    console.log('HTTP server listening on port 4001');
  });
}

bootstrap();
