import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && await bcrypt.compare(pass, user.passwordHash)) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role?.name };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      }
    };
  }

  async register(userData: any) {
    const existingUser = await this.usersService.findOneByEmail(userData.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await this.usersService.create({
      ...userData,
      passwordHash: hashedPassword,
    });

    return this.login(user);
  }
}
