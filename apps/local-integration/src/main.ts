import { NestFactory } from '@nestjs/core';
import { LocalIntegrationModule } from './local-integration.module';

async function bootstrap() {
  const app = await NestFactory.create(LocalIntegrationModule);
  await app.listen(3000);
}
bootstrap();
