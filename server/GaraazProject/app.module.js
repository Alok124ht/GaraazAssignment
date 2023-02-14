"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const Schema_1 = require("./schema/Schema");
const brand_service_1 = require("./brandService/brand.service");
const brand_sales_daily_controller_1 = require("./brand_sales_daily/brand_sales_daily.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017', { dbname: 'nestdb' }),
            mongoose_1.MongooseModule.forFeature([{ name: 'brand', schema: Schema_1.brandSchema }])
        ],
        controllers: [app_controller_1.AppController, brand_sales_daily_controller_1.BrandSalesDailyController],
        providers: [app_service_1.AppService, brand_service_1.BrandService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map