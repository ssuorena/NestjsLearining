import { Controller, Get, Post, Body, Patch, Param, Delete ,Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('auth')
@ApiTags("Authorization")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'This API create user' })
  register(@Body() registerDto: RegisterDto ) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'This API if for user login' })
  login(@Body() LoginDto: LoginDto,  @Req() req:Request) {
    return this.authService.login(LoginDto,req);
  }

}
