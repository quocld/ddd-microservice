import { NestFactory } from '@nestjs/core';
import { BffModule } from './bff.module';

async function bootstrap() {
  const app = await NestFactory.create(BffModule);
  app.enableCors({})
  await app.listen(8888);
}
bootstrap();
