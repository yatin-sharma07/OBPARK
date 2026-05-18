import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@CurrentUser() user: { id: string }) {
    return this.userService.getMe(user.id)
  }

  @Patch('profile')
  updateProfile(
    @CurrentUser() user: { id: string },
    @Body() body: { name?: string; phone?: string },
  ) {
    return this.userService.updateProfile(user.id, body)
  }
}