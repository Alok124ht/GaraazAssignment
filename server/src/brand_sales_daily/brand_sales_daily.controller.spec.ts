import { Test, TestingModule } from '@nestjs/testing';
import { BrandSalesDailyController } from './brand_sales_daily.controller';

describe('BrandSalesDailyController', () => {
  let controller: BrandSalesDailyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandSalesDailyController],
    }).compile();

    controller = module.get<BrandSalesDailyController>(BrandSalesDailyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
