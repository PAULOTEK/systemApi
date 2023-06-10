import { Controller, Get, Post, Body } from '@nestjs/common';
import { Product } from '../models/product.model';
@Controller('products')
export class ProductController {
  private products: Product[] = [];

  @Get()
  getProducts(): Product[] {
    return this.products;
  }

  @Post()
  addProduct(@Body() product: Product): Product {
    this.products.push(product);
    return product;
  }
}
