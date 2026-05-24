import { Controller, Get, Param } from '@nestjs/common'
import { CategoryService } from './category.service'

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getTree() {
    return this.categoryService.getTree()
  }

  @Get(':slug')
  getBySlug(@Param('slug') slug: string) {
    return this.categoryService.getBySlug(slug)
  }
}