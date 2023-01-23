import { Document } from 'mongoose';

export interface IProduct extends Document {
  product_name: string;
  price: number;
  variant: string[];
  colors: string[];
  total_stars: number;
  total_rated: number;
  description: string;
}
