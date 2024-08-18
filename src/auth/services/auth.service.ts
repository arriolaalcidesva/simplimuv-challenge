import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { AuthResponse, PayloadToken } from '../../interfaces/auth.interface';

const configService = new ConfigService();

@Injectable()
export class AuthService {
  private readonly user: string;
  private readonly pass: string;

  constructor(private readonly configService: ConfigService) {
    this.user = this.configService.get<string>('AUTH_USER');
    this.pass = this.configService.get<string>('AUTH_PASSWORD');
  }

  public validateUser(username: string, password: string): string | null {
    if (username === this.user && password === this.pass) return username;

    return null;
  }

  public signJWT({
    payload,
    secret,
    expires,
  }: {
    payload: jwt.JwtPayload;
    secret: string;
    expires: number | string;
  }): string {
    return jwt.sign(payload, secret, { expiresIn: expires });
  }

  public async generateJWT(user: string): Promise<AuthResponse> {
    const payload: PayloadToken = {
      sub: user,
    };

    return {
      accessToken: this.signJWT({
        payload,
        secret: process.env.JWT_SECRET,
        expires: '1h',
      }),
    };
  }
}
