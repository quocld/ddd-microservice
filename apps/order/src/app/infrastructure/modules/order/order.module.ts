import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from '../../../controllers/order.controller';
import { Order, OrderSchema } from '../../models/order.schema';
import { OrderService } from '../../../domain/services/order.service';
import { OrdersRepository } from '../../repositorys/order-repository/orders.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    OrderModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, OrdersRepository],
})
export class OrderModule {}
