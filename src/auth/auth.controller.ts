/* eslint-disable prettier/prettier */
// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() {username, password}: LoginDto) {
    return this.authService.login(username, password);
  }
}
