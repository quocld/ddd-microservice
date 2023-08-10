import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from '../domain/services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('random-create')
  hello() {
    return this.orderService.createNewOrder();
  }

  @Get('')
  getOrders() {
    return this.orderService.findAll();
  }

  @Post(':quantity')
  create(@Param('quantity') quantity: number) {
    return this.orderService.create(quantity);
  }

  @Patch(':id')
  delete(@Param('id') id: string){
    return this.orderService.delete(id);
  }
}
