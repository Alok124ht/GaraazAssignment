import { BrandService } from 'src/brandService/brand.service';
import { createBrandDto } from 'src/dto/create-brand.dto';
export declare class BrandSalesDailyController {
    private readonly brandservice;
    constructor(brandservice: BrandService);
    createBrandDto(response: any, createBrandDto: createBrandDto): Promise<any>;
    getBrand(response: any): Promise<any>;
}
