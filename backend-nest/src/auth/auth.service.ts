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
    console.log(`Validating user: ${email}`);
    const user = await this.usersService.findOneByEmail(email);
    console.log(`User found: ${!!user}`);
    if (user && await bcrypt.compare(pass, user.passwordHash)) {
      console.log('Password match');
      const { passwordHash, ...result } = user;
      return result;
    }
    console.log('Validation failed');
    return null;
  }

  async login(user: any) {
    console.log('Generating JWT for:', user.email);
    const payload = { email: user.email, sub: user.id, role: user.role?.name || 'GUEST' };
    try {
      const token = this.jwtService.sign(payload);
      return {
        access_token: token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      }
    };
    } catch (err) {
      console.error('JWT Signing failed:', err);
      throw err;
    }
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
