"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BrandService = class BrandService {
    constructor(brandModel) {
        this.brandModel = brandModel;
    }
    async createBrand(createBrandDto) {
        const newBrand = await new this.brandModel(createBrandDto);
        return newBrand.save();
    }
    async getAllBrand() {
        const brandData = await this.brandModel.find();
        if (!brandData || brandData.length == 0) {
            throw new common_1.NotFoundException("Brand Data not found");
        }
        return brandData;
    }
    async getBrand(brandId) {
        const existingBrand = await this.brandModel.findById(brandId);
        if (!existingBrand) {
            throw new common_1.NotFoundException('brand#{brandId} not found');
        }
        return existingBrand;
    }
    async deleteStudent(brandId) {
        const deletedBrand = await this.brandModel.findByIdAndDelete(brandId);
        if (!deletedBrand) {
            throw new common_1.NotFoundException(`brand #${brandId} not found`);
        }
        return deletedBrand;
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('brand')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map