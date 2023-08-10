import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { AbstractRepository } from '../abstract.repositpry';
import { Order } from '../../models/order.schema';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectModel(Order.name) OrderModule: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(OrderModule, connection);
  }
}
