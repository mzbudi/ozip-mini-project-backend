import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto';
import { IProduct } from './product.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<IProduct> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async getProductById(id: string): Promise<IProduct> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async getProducts(): Promise<IProduct[]> {
    return this.productModel.find().exec();
  }
}
