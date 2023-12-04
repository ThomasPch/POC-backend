import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { HashingService } from '../shared/hashing/hashing.service';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly hashingService: HashingService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    Logger.log('user ===> ' + user);
    const isValid = await this.hashingService.compare(pass, user?.password);
    Logger.log('pass ===> ' + pass);
    Logger.log('user?.password ===> ' + user?.password);
    Logger.log('is Valid ==> ' + isValid);
    if (!isValid) {
      throw new UnauthorizedException();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
