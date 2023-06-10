import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() credentials: { email: string; password: string }): { token: string } {
    // Realize a autenticação e gere o token JWT aqui
    const token = 'your_generated_token';
    return { token };
  }
}
