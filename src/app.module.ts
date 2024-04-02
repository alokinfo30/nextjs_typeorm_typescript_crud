import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
