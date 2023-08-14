import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { Order } from '../infrastructure/models/order.schema';
import { Types } from 'mongoose';
import { OrderService } from '../domain/services/order/order.service';

export const orderStub = (): Order => {
  return {
    _id: new Types.ObjectId('64d49619a0b2f0c44d58bab5'),
    isDeleted: true,
    quantity: 2,
    createdAt: new Date('2023-08-10T09:13:45.775Z'),
    updatedAt: new Date('2023-08-10T09:13:45.775Z'),
  };
};

describe('OrderController', () => {
  let orderController: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: OrderService,
          useValue: {
            createNewOrder: jest.fn().mockReturnValue(orderStub()),
            findAll: jest.fn().mockReturnValue([orderStub()]),
            create: jest.fn().mockReturnValue(orderStub()),
            delete: jest.fn().mockReturnValue(orderStub()),
          },
        },
      ],
    }).compile();

    orderController = module.get<OrderController>(OrderController);
    orderService = module.get<OrderService>(OrderService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(orderController).toBeDefined();
  });

  describe('random', () => {
    let order: Order;

    beforeEach(async () => {
      order = await orderController.random();
    });

    test('then it should call orderService', () => {
      expect(orderService.createNewRandomOrder).toBeCalled();
    });

    test('then is should return a order', () => {
      expect(order).toEqual(orderStub());
    });
  });

  describe('getOrders', () => {
    let orders: Order[];

    beforeEach(async () => {
      orders = await orderController.getOrders();
    });

    test('should call orderService.findAll', () => {
      expect(orderService.findAll).toBeCalled();
    });

    test('should return an array of orders', () => {
      expect(orders).toEqual([orderStub()]);
    });
  });

  describe('create', () => {
    let order: Order;
    const quantity = 5;

    beforeEach(async () => {
      order = await orderController.create(quantity);
    });

    test('should call orderService.create with the provided quantity', () => {
      expect(orderService.create).toBeCalledWith(quantity);
    });

    test('should return a new order', () => {
      expect(order).toEqual(orderStub());
    });
  });

  describe('delete', () => {
    let deletedOrder: Order;
    const orderId = '64d49619a0b2f0c44d58bab5';

    beforeEach(async () => {
      deletedOrder = await orderController.delete(orderId);
    });

    test('should call orderService.delete with the provided order id', () => {
      expect(orderService.delete).toBeCalledWith(orderId);
    });

    test('should return the deleted order', () => {
      expect(deletedOrder).toEqual(orderStub());
    });
  });
});
