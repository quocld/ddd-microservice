
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseShema, now } from 'mongoose';
import { AbstractDocument } from '../repositorys/abstract.schemas';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true, collection: 'orders' })
export class Order extends AbstractDocument {
  
  @Prop({ type: Number, default: 1 })
  quantity: number;

  @Prop({ type: Date, default: now })
  createdAt: Date;

  @Prop({ type: Date, default: now })
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
