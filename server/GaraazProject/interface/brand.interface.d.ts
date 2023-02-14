import { Document } from "mongoose";
export interface ISBrand extends Document {
    readonly brand: string;
    readonly transactionType: string;
    readonly totalOrders: Number;
    readonly totalOrderValue: Number;
    readonly grossMarginPercentage: Number;
}
