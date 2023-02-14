import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  Model } from 'mongoose';
import { createBrandDto } from 'src/dto/create-brand.dto';
import { ISBrand } from 'src/interface/brand.interface';

@Injectable()
export class BrandService {
    constructor (@InjectModel('brand') private brandModel:Model<ISBrand>){

    }
    // creating a new brand 

    async createBrand (createBrandDto: createBrandDto):Promise<ISBrand>{

        const newBrand =  await new this.brandModel(createBrandDto)
        return newBrand.save()

    }
    // reading   all the  brand from mongoDb

    async getAllBrand ():Promise<ISBrand[]>{
         const brandData = await this.brandModel.find()
         if(!brandData|| brandData.length== 0){
            throw new NotFoundException ("Brand Data not found")
         }
         return brandData
    }
    // get a specific brand by using id 

    async getBrand(brandId: string): Promise<ISBrand>{
        const existingBrand = await this.brandModel.findById(brandId)
        if(!existingBrand){
            throw new NotFoundException('brand#{brandId} not found')
        }
        return existingBrand
    }
    // delete Brand 
    async deleteStudent(brandId: string): Promise<ISBrand> {
        const deletedBrand = await this.brandModel.findByIdAndDelete( brandId);
       if (!deletedBrand) {
         throw new NotFoundException(`brand #${brandId} not found`);
       }
       return deletedBrand;
    }



    

}
