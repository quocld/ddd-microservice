import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../../infrastructure/repositorys/order-repository/orders.repository';
import { OrderModel } from '../../infrastructure/models/order.model';
import { Observable, firstValueFrom } from 'rxjs';
import { Order } from '../entities/order.entity';
import { Types } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrdersRepository) {}

  createNewOrder() {
    return this.orderRepository.create(new OrderModel({ quantity: Math.random() }));
  }

  async findAll() {
    return await this.orderRepository.find({});
  }

  async create(quantity: number) {
    return await this.orderRepository.create(
      new OrderModel({ quantity: quantity }),
    );
  }

  async delete(id: string){
    return await this.orderRepository.findOneAndUpdate({_id: new Types.ObjectId(id)},{isDeleted: true});
  }
}
