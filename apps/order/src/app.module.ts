import { Module } from '@nestjs/common';
import { DatabaseModule } from './app/infrastructure/database/database.module';
import { AppController } from './app/controllers/app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './app/infrastructure/models/order.schema';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      MONGODB_URI: Joi.string().required(),
    }),
    envFilePath: './apps/order/.env',
  }),
    DatabaseModule, MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema },])],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
