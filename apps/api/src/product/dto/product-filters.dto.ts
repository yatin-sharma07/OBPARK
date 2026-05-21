import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator'
import { Transform } from 'class-transformer'

export class ProductFiltersDto {
  @IsOptional()
  @IsString()
  category?: string

  @IsOptional()
  @IsString()
  make?: string

  @IsOptional()
  @IsString()
  model?: string

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  priceMin?: number

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  priceMax?: number

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  offset?: number
}