import { Module } from '@nestjs/common';
import { OrderControllerController } from './order.controller';
import { HttpClientServiceModule } from 'apps/bff/src/services/http-client/http-client.service.module';

@Module({
  imports:[HttpClientServiceModule],
  controllers: [OrderControllerController],
  providers: [],
})
export class OrderControllerModule {}
