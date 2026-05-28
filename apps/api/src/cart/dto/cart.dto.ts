import { IsString, IsOptional, IsInt, Min } from 'class-validator'

export class AddToCartDto {
  @IsString()
  productId!: string

  @IsOptional()
  @IsString()
  vehicleId?: string

  @IsInt()
  @Min(1)
  quantity: number = 1
}

export class UpdateCartItemDto {
  @IsInt()
  @Min(0)
  quantity!: number
}

export class LinkVehicleDto {
  @IsOptional()
  @IsString()
  vehicleId?: string
}