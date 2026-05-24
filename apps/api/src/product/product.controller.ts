import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductFiltersDto } from './dto/product-filters.dto'

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(@Query() filters: ProductFiltersDto) {
    return this.productService.getProducts(filters)
  }

  @Get('featured')
  getFeatured() {
    return this.productService.getFeatured()
  }

  @Get(':slug')
  getBySlug(
    @Param('slug') slug: string,
    @Query('vrn') vrn?: string,
  ) {
    return this.productService.getBySlug(slug, vrn)
  }
}