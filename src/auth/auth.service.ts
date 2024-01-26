import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(token: string) {
    const user = await this.usersService.findByToken(token);
    if (user) {
      return user;
    }
  }
}
