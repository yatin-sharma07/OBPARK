import { IsString, Matches } from 'class-validator'

export class AddVehicleDto {
  @IsString()
  @Matches(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/, {
    message: 'Invalid VRN format. Example: MH12AB1234',
  })
  vrn!: string
}