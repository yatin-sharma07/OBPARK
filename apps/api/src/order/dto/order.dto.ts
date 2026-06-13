import {
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator'
import { Type } from 'class-transformer'

export class OneTimeAddressDto {
  @IsString()
  line1!: string

  @IsOptional()
  @IsString()
  line2?: string

  @IsString()
  city!: string

  @IsString()
  state!: string

  @IsString()
  pincode!: string
}

export class CreateOrderDto {
  @IsOptional()
  @IsString()
  savedAddressId?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => OneTimeAddressDto)
  oneTimeAddress?: OneTimeAddressDto

  @IsOptional()
  @IsString()
  couponCode?: string

  @IsOptional()
  @IsString()
  notes?: string
}

export class SaveAddressDto {
  @IsString()
  label!: string

  @IsString()
  line1!: string

  @IsOptional()
  @IsString()
  line2?: string

  @IsString()
  city!: string

  @IsString()
  state!: string

  @IsString()
  pincode!: string

  @IsOptional()
  isDefault?: boolean
}