import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../../infrastructure/repositorys/order-repository/orders.repository';
import { OrderModel } from '../../infrastructure/models/order.model';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrdersRepository) {}

  createNewOrder(){
    return this.orderRepository.create(new OrderModel({quantity:2}))
  }
}
