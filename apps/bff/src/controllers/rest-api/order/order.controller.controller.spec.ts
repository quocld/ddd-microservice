import { Test, TestingModule } from '@nestjs/testing';
import { OrderControllerController } from './order.controller';

describe('OrderControllerController', () => {
  let controller: OrderControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderControllerController],
      providers: [],
    }).compile();

    controller = module.get<OrderControllerController>(OrderControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
