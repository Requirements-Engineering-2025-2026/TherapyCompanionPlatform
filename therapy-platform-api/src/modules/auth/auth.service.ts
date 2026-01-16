/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../user/users.service';
import { User, UserType } from '../../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const match = await bcrypt.compare(pass, user.password);
    if (match) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { sub: user.id, email: user.email, type: user.type };
    const token = this.jwtService.sign(payload);
    // store token optionally
    await this.usersService.setBearerToken(user.id, token);
    return { access_token: token };
  }

  async register(data: {
    username: string;
    email: string;
    password: string;
    type: UserType;
    address?: string;
    phone_number?: string;
  }) {
    const hashed = await bcrypt.hash(data.password, 10);
    return this.usersService.create({
      ...data,
      password: hashed,
    });
  }
}
