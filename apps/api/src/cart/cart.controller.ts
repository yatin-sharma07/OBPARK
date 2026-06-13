import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common'
import { CartService } from './cart.service'
import {
  AddToCartDto,
  UpdateCartItemDto,
  LinkVehicleDto,
} from './dto/cart.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(
    private cartService: CartService,
  ) {}

  @Get()
  getCart(
    @CurrentUser() user: { id: string },
  ) {
    return this.cartService.getCart(
      user.id,
    )
  }

  @Post('items')
  addItem(
    @CurrentUser() user: { id: string },
    @Body() dto: AddToCartDto,
  ) {
    return this.cartService.addItem(
      user.id,
      dto,
    )
  }

  @Patch('items/:id')
  updateItem(
    @CurrentUser() user: { id: string },
    @Param('id') itemId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartService.updateItem(
      user.id,
      itemId,
      dto.quantity,
    )
  }

  @Delete('items/:id')
  removeItem(
    @CurrentUser() user: { id: string },
    @Param('id') itemId: string,
  ) {
    return this.cartService.removeItem(
      user.id,
      itemId,
    )
  }

  @Patch('items/:id/vehicle')
  linkVehicle(
    @CurrentUser() user: { id: string },
    @Param('id') itemId: string,
    @Body() dto: LinkVehicleDto,
  ) {
    return this.cartService.linkVehicle(
      user.id,
      itemId,
      dto.vehicleId ?? null,
    )
  }

  @Delete()
  clearCart(
    @CurrentUser() user: { id: string },
  ) {
    return this.cartService.clearCart(
      user.id,
    )
  }
}