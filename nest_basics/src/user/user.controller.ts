import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('userId/:id')
  // parseInt converts string to number
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }
  @Get('userId/:id/welcome')
  greetUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getWelcomeMessage(id);
  }
}
