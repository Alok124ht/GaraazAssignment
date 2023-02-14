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
exports.BrandSalesDailyController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("../brandService/brand.service");
const create_brand_dto_1 = require("../dto/create-brand.dto");
let BrandSalesDailyController = class BrandSalesDailyController {
    constructor(brandservice) {
        this.brandservice = brandservice;
    }
    async createBrandDto(response, createBrandDto) {
        try {
            const newBrandSales = await this.brandservice.createBrand(createBrandDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: "Brand sales has been created sucessfully",
                newBrandSales
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: "Error brand not created ",
                error: 'Bad Request'
            });
        }
    }
    async getBrand(response) {
        try {
            const brandData = await this.brandservice.getAllBrand();
            return response.status(common_1.HttpStatus.OK).json({
                message: "All brand data found sucessfully",
                brandData
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_brand_dto_1.createBrandDto]),
    __metadata("design:returntype", Promise)
], BrandSalesDailyController.prototype, "createBrandDto", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandSalesDailyController.prototype, "getBrand", null);
BrandSalesDailyController = __decorate([
    (0, common_1.Controller)('brand-sales-daily'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandSalesDailyController);
exports.BrandSalesDailyController = BrandSalesDailyController;
//# sourceMappingURL=brand_sales_daily.controller.js.map