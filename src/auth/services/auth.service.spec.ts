import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { ConfigServiceMock } from '../mocks/config.service.mock';

describe('AuthService', () => {
  let authService: AuthService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: ConfigService,
          useValue: ConfigServiceMock,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    configService = module.get<ConfigService>(ConfigService);

    // Mocking process.env.JWT_SECRET
    process.env.JWT_SECRET = 'secretKey';
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should validate user with correct credentials', () => {
    const username = 'testUser';
    const password = 'testPass';
    expect(authService.validateUser(username, password)).toBe(username);
  });

  it('should not validate user with incorrect credentials', () => {
    const username = 'wrongUser';
    const password = 'wrongPass';
    expect(authService.validateUser(username, password)).toBeNull();
  });

  it('should generate JWT token', async () => {
    const token = await authService.generateJWT('testUser');
    expect(token).toHaveProperty('accessToken');
    expect(typeof token.accessToken).toBe('string');

    // Verifica token
    const decoded = jwt.verify(token.accessToken, process.env.JWT_SECRET);
    expect(decoded).toHaveProperty('sub', 'testUser');
  });
});
