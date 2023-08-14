import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { OrdersRepository } from '../../../infrastructure/repositorys/order-repository/orders.repository';

import { Types } from 'mongoose';
import { Order } from '../../../infrastructure/models/order.schema';

export const orderStub = (): Order => {
  return {
    _id: new Types.ObjectId('64d49619a0b2f0c44d58bab5'),
    isDeleted: true,
    quantity: 2,
    paid: false,
    createdAt: new Date('2023-08-10T09:13:45.775Z'),
    updatedAt: new Date('2023-08-10T09:13:45.775Z'),
  };
};

describe('OrderService', () => {
  let orderService: OrderService;
  let orderRepository: OrdersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: OrdersRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(orderStub()),
            find: jest.fn().mockResolvedValue([orderStub()]),
            findOneAndUpdate: jest.fn().mockResolvedValue(orderStub()),
          },
        },
      ],
    }).compile();

    orderService = module.get<OrderService>(OrderService);
    orderRepository = module.get<OrdersRepository>(OrdersRepository);
  });

  it('should be defined', () => {
    expect(orderService).toBeDefined();
  });

  describe('createNewOrder', () => {
    it('should call orderRepository.create and return a new order', async () => {
      const result = await orderService.createNewRandomOrder();
      expect(result).toEqual(orderStub());
      expect(orderRepository.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should call orderRepository.find and return a list of orders', async () => {
      const result = await orderService.findAll();
      expect(result).toEqual([orderStub()]);
      expect(orderRepository.find).toHaveBeenCalledWith({isDeleted: false});
    });
  });

  describe('create', () => {
    let order: Order;

    beforeEach(async () => {
      order = await orderService.create(orderStub().quantity);
    });

    test('should call orderRepository.create with the provided quantity', async () => {
      expect(orderRepository.create).toBeCalled()
    });

    test('should return a new order', () => {
      expect(order).toEqual(orderStub());
    });
  });

  describe('delete', () => {
    it('should call orderRepository.findOneAndUpdate with the provided id and mark the order as deleted', async () => {
      const orderId = String(orderStub()._id);
      const result = await orderService.delete(orderId);
      expect(result).toEqual(orderStub());
      expect(orderRepository.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: new Types.ObjectId(orderId) },
        { isDeleted: true },
      );
    });
  });
});
