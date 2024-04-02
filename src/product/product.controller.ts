import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productService.findOne(id);
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return await this.productService.create(product);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() product: Product): Promise<Product> {
    return await this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.productService.delete(id);
  }
}
