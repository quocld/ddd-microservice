import { Module } from '@nestjs/common';
import { OrderControllerController } from './order.controller';
import { HttpClientServiceModule } from 'apps/bff/src/services/http-client/http-client.service.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpClientServiceModule, HttpModule],
  controllers: [OrderControllerController],
  providers: [],
})
export class OrderControllerModule {}
