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
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandSchema = exports.brand_sales_daily = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let brand_sales_daily = class brand_sales_daily extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], brand_sales_daily.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], brand_sales_daily.prototype, "transactionType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], brand_sales_daily.prototype, "totalOrders", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], brand_sales_daily.prototype, "totalOrderValue", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], brand_sales_daily.prototype, "grossMarginPercentage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: () => new Date() }),
    __metadata("design:type", Date)
], brand_sales_daily.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: () => new Date() }),
    __metadata("design:type", Date)
], brand_sales_daily.prototype, "updatedAt", void 0);
brand_sales_daily = __decorate([
    (0, mongoose_1.Schema)()
], brand_sales_daily);
exports.brand_sales_daily = brand_sales_daily;
exports.brandSchema = mongoose_1.SchemaFactory.createForClass(brand_sales_daily);
//# sourceMappingURL=Schema.js.map