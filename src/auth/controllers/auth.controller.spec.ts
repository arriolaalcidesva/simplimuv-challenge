import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const authServiceMock = {
      validateUser: jest.fn(),
      generateJWT: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceMock,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('should return a JWT token if validation is successful', async () => {
      const mockUser = { id: '1', username: 'testuser' };
      const mockToken = 'mockJwtToken';
      authService.validateUser = jest.fn().mockReturnValue(mockUser);
      authService.generateJWT = jest.fn().mockResolvedValue(mockToken);

      const result = await controller.login({
        username: 'testuser',
        password: 'testpass',
      });

      expect(authService.validateUser).toHaveBeenCalledWith(
        'testuser',
        'testpass',
      );
      expect(authService.generateJWT).toHaveBeenCalledWith(mockUser);
      expect(result).toBe(mockToken);
    });

    it('should throw UnauthorizedException if validation fails', async () => {
      authService.validateUser = jest.fn().mockReturnValue(null);

      await expect(
        controller.login({ username: 'wronguser', password: 'wrongpass' }),
      ).rejects.toThrow(UnauthorizedException);
      expect(authService.validateUser).toHaveBeenCalledWith(
        'wronguser',
        'wrongpass',
      );
      expect(authService.generateJWT).not.toHaveBeenCalled();
    });
  });
});
