import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  product_name: string;

  @Prop()
  price: number;

  @Prop()
  variant: string[];

  @Prop()
  colors: string[];

  @Prop()
  total_stars: number;

  @Prop()
  total_rated: number;

  @Prop()
  description: string;

  @Prop()
  stock: number;

  @Prop()
  photo: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
