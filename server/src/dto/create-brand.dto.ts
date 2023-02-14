import { IsString, MaxLength ,IsNotEmpty, IsNumber, IsDate } from "class-validator";
//import {IsString, MaxLength ,IsNotEmpty, IsNumber} from "class-validator/types/decorator/decorators";
//import { isNotEmpty, MaxLength } from "class-validator/types/decorator/decorators";

export class createBrandDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    
    readonly brand:string;
    @IsString()
    @IsNotEmpty()
    readonly transactionType:string;
    @IsNotEmpty()
    //@MaxLength(2)
    @IsNumber()
    readonly totalOrders : Number;
    @IsNotEmpty()
    //@MaxLength(12)
    @IsNumber()
    readonly totalOrderValue: Number;
    @IsNotEmpty()
    //@MaxLength ()
    @IsNumber()
    readonly grossMarginPercentage: Number;
  
}



