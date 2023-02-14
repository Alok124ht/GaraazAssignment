import { Model } from 'mongoose';
import { createBrandDto } from 'src/dto/create-brand.dto';
import { ISBrand } from 'src/interface/brand.interface';
export declare class BrandService {
    private brandModel;
    constructor(brandModel: Model<ISBrand>);
    createBrand(createBrandDto: createBrandDto): Promise<ISBrand>;
    getAllBrand(): Promise<ISBrand[]>;
    getBrand(brandId: string): Promise<ISBrand>;
    deleteStudent(brandId: string): Promise<ISBrand>;
}
