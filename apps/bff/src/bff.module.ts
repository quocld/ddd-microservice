import { Module } from '@nestjs/common';
import { RestControllerModule } from './controllers/rest.controller.module';
import { OrderKafkaModule } from './controllers/kafka/order/order.kafka.module';

@Module({
  imports: [RestControllerModule,OrderKafkaModule,],
  controllers: [],
  providers: [],
})
export class BffModule {}
