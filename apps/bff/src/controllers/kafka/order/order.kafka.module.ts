import { Module } from '@nestjs/common';
import { OrderController } from './order.controller.kafka';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { v4 as uuid } from 'uuid';

@Module({
  imports:[ClientsModule.register([
    {
      transport: Transport.KAFKA,
      name: "SERVER",
      options: {
        client: {
          brokers: ['kafka:9093'],
        },
        consumer: {
          groupId: `user.${uuid()}`,
        },
      },
    },
  ]),],
  controllers: [OrderController],
  providers: [],
})
export class OrderKafkaModule {}
