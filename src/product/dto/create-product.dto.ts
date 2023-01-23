import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  product_name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString({ each: true })
  @MaxLength(10, { each: true })
  variant: string[];

  @IsString({ each: true })
  @MaxLength(10, { each: true })
  colors: string[];

  @IsNumber()
  @IsNotEmpty()
  total_stars: number;

  @IsNumber()
  @IsNotEmpty()
  total_rated: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  description: string;
}
