import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import  {brandSchema} from './schema/Schema'
import { BrandService } from './brandService/brand.service';
import { BrandSalesDailyController } from './brand_sales_daily/brand_sales_daily.controller';
@Module({
  imports:
   [MongooseModule.forRoot('mongodb://localhost:27017',{dbname :'nestdb'}),
   MongooseModule.forFeature([{name:'brand', schema:brandSchema}])
],
   controllers: [AppController, BrandSalesDailyController],
   providers: [AppService, BrandService],
})
export class AppModule {}
