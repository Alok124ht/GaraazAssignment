import { Controller,Post, Res, HttpStatus,  Get, Body} from '@nestjs/common';
//import { response } from 'express';
//import { response } from 'express';
import { BrandService } from 'src/brandService/brand.service';
import { createBrandDto } from 'src/dto/create-brand.dto';

@Controller('brand-sales-daily')
export class BrandSalesDailyController {
    constructor (private readonly brandservice :BrandService){}
        @Post ()
        async createBrandDto (@Res() response,@Body()createBrandDto:createBrandDto){
            try{
                  
               const newBrandSales = await this.brandservice.createBrand(createBrandDto)
               return response.status (HttpStatus.CREATED).json({
                message : "Brand sales has been created sucessfully",
                newBrandSales
               })



            }catch(err){
                return response .status (HttpStatus.BAD_REQUEST).json({
                    statusCode : 400,
                    message : "Error brand not created ",
                    error : 'Bad Request'
                })
                
            }

             // get the brand 
         
    
         
        }

        @Get()
        async getBrand(@Res() response){
           try{
               const  brandData = await this.brandservice.getAllBrand()
               return response.status(HttpStatus.OK).json({
                message : "All brand data found sucessfully",
                brandData 
               })
           }catch (err){
             return response.status(err.status).json (err.response)
             
        }




       }


    }
