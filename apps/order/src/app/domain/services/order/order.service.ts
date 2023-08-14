import { HttpStatus, Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { orderError } from './errors/order.errors';
import { InjectionHTTPExceptions } from '../../../common/decorator/try-catch.decorator';
import { OrderModel } from '../../../infrastructure/models/order.model';
import { OrdersRepository } from '../../../infrastructure/repositorys/order-repository/orders.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrdersRepository) {}

  @InjectionHTTPExceptions(
    orderError.INTERNAL_SERVER_ERROR,
    HttpStatus.INTERNAL_SERVER_ERROR,
  )
  createNewRandomOrder() {
    return this.orderRepository.create(
      new OrderModel({ quantity: Math.random() }),
    );
  }

  @InjectionHTTPExceptions(
    orderError.INTERNAL_SERVER_ERROR,
    HttpStatus.INTERNAL_SERVER_ERROR,
  )
  async findAll() {
    return await this.orderRepository.find({ isDeleted: false });
  }

  @InjectionHTTPExceptions(
    orderError.INTERNAL_SERVER_ERROR,
    HttpStatus.INTERNAL_SERVER_ERROR,
  )
  async create(quantity: number) {
    return await this.orderRepository.create(
      new OrderModel({ quantity: quantity }),
    );
  }

  @InjectionHTTPExceptions(
    orderError.INTERNAL_SERVER_ERROR,
    HttpStatus.INTERNAL_SERVER_ERROR,
  )
  async delete(id: string) {
    return await this.orderRepository.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { isDeleted: true },
    );
  }

  @InjectionHTTPExceptions(
    orderError.INTERNAL_SERVER_ERROR,
    HttpStatus.INTERNAL_SERVER_ERROR,
  )
  async pay(id: string) {
    const orderPaid = await this.orderRepository.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { paid: true },
    );

    console.log('paid' + orderPaid);

    return orderPaid;
  }
}
