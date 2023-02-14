
import { Prop, Schema, SchemaFactory , } from "@nestjs/mongoose";

import {  Document  } from "mongoose";
// export type MessageDocument = brand_sales_daily & Document &SchemaTimestampsConfig;
@Schema ()
export class brand_sales_daily extends Document{
    @Prop ()
    brand : string;
    @Prop ()
    transactionType: string;
    @Prop ()
    totalOrders: number;
    @Prop ()
    totalOrderValue : Number;
    @Prop()
    grossMarginPercentage: Number;
    @Prop({required: true , default:()=> new Date()})
    createdAt: Date

    @Prop ({required: true, default : ()=> new Date()})
    updatedAt : Date;
}

export const brandSchema = SchemaFactory.createForClass(brand_sales_daily);

