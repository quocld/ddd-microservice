import { Module } from '@nestjs/common';
import { OrderControllerModule } from './rest-api/order/order.controller.module';

@Module({imports:[
    OrderControllerModule,
]})
export class RestControllerModule {}
