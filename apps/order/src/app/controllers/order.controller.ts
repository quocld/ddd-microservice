import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from '../domain/services/order/order.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';



@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService, ) {}

  @Get('random-create')
  random() {
    return this.orderService.createNewRandomOrder();
  }

  @Get('')
  getOrders() {
    return this.orderService.findAll();
  }

  @Post(':quantity')
  create(@Param('quantity') quantity: number) {
    return this.orderService.create(quantity);
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.orderService.delete(id);
  }

  @MessagePattern('count')
  count( value: { order_id: string } ) {
    return this.orderService.pay(value.order_id);
  }
}
