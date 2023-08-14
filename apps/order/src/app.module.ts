import { Module } from '@nestjs/common';
import { DatabaseModule } from './app/infrastructure/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './app/infrastructure/modules/order/order.module';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './apps/order/.env',
    }),
    DatabaseModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
