import { Controller, Get } from '@nestjs/common';
import { OrderService } from '../domain/services/order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  hello() {
    return this.orderService.createNewOrder();
  }

  @Get('/orders')
  getOrders() {
    return 'Orders heare:/....';
  }
}
