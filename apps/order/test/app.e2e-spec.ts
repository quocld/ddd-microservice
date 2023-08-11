import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import * as request from 'supertest';
import { Order } from '../src/app/domain/entities/order.entity';

describe('AppController (e2e)', () => {
  const httpServer = 'http://localhost:4001';

  describe('Order', () => {
    describe('Random create', () => {
      it('Should return a user', () => {
        return request(httpServer).get('/orders/random-create').expect(200);
      });
    });

    describe('Get all orders', () => {
      it('Should return a list users', () => {
        const expectArray = expect.arrayContaining([
          {
            __v: expect.any(Number),
            _id: expect.any(String),
            createdAt: expect.any(String),
            isDeleted: expect.any(Boolean),
            quantity: expect.any(Number),
            updatedAt: expect.any(String),
          },
        ]);
        return request(httpServer)
          .get('/orders')
          .expect(200)
          .expect((response) => {
            const responseData: Order[] = response.body;
            expect(responseData).toEqual(expectArray);
          });
      });
    });

    describe('Create new order', () => {
      it('Should return a user', () => {
        const mockQuantity = 5;
        return request(httpServer)
          .post(`/orders/${mockQuantity}`)
          .expect(201)
          .expect((response) => {
            const responseData: Order = response.body;
            expect(responseData).toBeDefined();
            expect(responseData.quantity).toBe(mockQuantity);
          });
      });
    });

    describe('Delete a order', () => {
      it('Should deleted a order', () => {
        const mockOrderId = '64d49620a0b2f0c44d58babb';
        return request(httpServer)
          .delete(`/orders/${mockOrderId}`)
          .expect(200)
          .expect((response) => {
            const responseData = response.body;
            expect(responseData).toBeDefined();
            expect(responseData.isDeleted).toBe(true);
          });
      });
    });
  });
});
