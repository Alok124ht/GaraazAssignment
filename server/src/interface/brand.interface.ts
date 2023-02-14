import { Date, Document } from "mongoose";
export interface ISBrand extends Document{
    readonly brand : string;
    readonly transactionType : string;
    readonly totalOrders : Number;
    readonly totalOrderValue : Number ;
    readonly grossMarginPercentage : Number ;
//    readonly createdAt : new Date.now()
//    readonly updated : Date,
  
}