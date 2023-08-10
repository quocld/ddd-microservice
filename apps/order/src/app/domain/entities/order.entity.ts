import { IsNotEmpty, IsNumber } from "class-validator";
import { Date, Types } from "mongoose";

export class Order {
    @IsNotEmpty()
    readonly _id: Types.ObjectId;
  
    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    createdAt: Date;

    updatedAt: Date;
  }
  