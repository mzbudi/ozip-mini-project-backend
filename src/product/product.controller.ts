import {
  Controller,
  Post,
  Param,
  Get,
  HttpStatus,
  Res,
  Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    try {
      const product = await this.productService.createProduct(createProductDto);
      return res.status(HttpStatus.OK).json({
        message: 'Product has been created successfully',
        product,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Product not created',
        status: 400,
      });
    }
  }

  @Get()
  async getProducts(@Res() res) {
    try {
      const products = await this.productService.getProducts();
      return res.status(HttpStatus.OK).json(products);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Products not found',
        status: 400,
      });
    }
  }

  @Get('/:id')
  async getProductById(@Res() res, @Param('id') id: string) {
    try {
      const product = await this.productService.getProductById(id);
      return res.status(HttpStatus.OK).json(product);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Product not found',
        status: 400,
      });
    }
  }
}
