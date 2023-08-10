import { IsNotEmpty, IsNumber } from "class-validator";
import { Date, Types } from "mongoose";

export class OrderModel {
    constructor(order: OrderModel | any) {
        this._id = new Types.ObjectId();
        this.quantity = order.quantity;
        this.createdAt = order.createdAt;
        this.updatedAt = order.updatedAt;
      }
    
    readonly _id?: Types.ObjectId;
  
    quantity: number;

    createdAt: Date;

    updatedAt: Date;

    save(): OrderModel {
        return this;
      } 
  }
  