import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from '../users/dto/sign-in.dto';
import { AuthGuard } from './auth.guards';

@Controller('auth')
export class AuthController {
  /**
 * @summary This is a summary of the auth
 * @tags auth
 * @description Description of the endpoint
 * @response 200 {string} OK - The request was successful
 * @response 401 {string} Not Found - Unauthorized
 */
  constructor (private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
