import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne(id);
  }

  async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }

  async update(id: number, product: Product): Promise<Product> {
    const existingProduct = await this.productRepository.findOne(id);
    if (!existingProduct) {
      return null;
    }
    await this.productRepository.update(id, product);
    return await this.productRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
