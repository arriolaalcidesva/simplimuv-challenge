import { UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from './auth.guard';
import { useToken } from '../../utils/use.token';
import { createExecutionContextMock } from '../mocks/create-execution-context.mock';

// Mock del useToken
jest.mock('../../utils/use.token');

describe(AuthGuard.name, () => {
  let guard: AuthGuard;
  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthGuard,
        {
          provide: Reflector,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    guard = module.get<AuthGuard>(AuthGuard);
    reflector = module.get<Reflector>(Reflector);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it(`${AuthGuard.prototype.canActivate.name} should allow access to public routes`, () => {
    jest.spyOn(reflector, 'get').mockReturnValue(true);

    const mockContext = createExecutionContextMock();
    expect(guard.canActivate(mockContext)).toBe(true);
  });

  it(`${AuthGuard.prototype.canActivate.name} should throw an UnauthorizedException if no token is provided`, () => {
    jest.spyOn(reflector, 'get').mockReturnValue(false);

    const mockContext = createExecutionContextMock();

    expect(() => guard.canActivate(mockContext)).toThrow(UnauthorizedException);
  });

  it(`${AuthGuard.prototype.canActivate.name} should throw an UnauthorizedException if token is invalid`, () => {
    jest.spyOn(reflector, 'get').mockReturnValue(false);

    const mockContext = createExecutionContextMock({
      simplimuv_token: 'invalid_token',
    });
    (useToken as jest.Mock).mockReturnValue('Invalid token');

    expect(() => guard.canActivate(mockContext)).toThrow(UnauthorizedException);
  });

  it(`${AuthGuard.prototype.canActivate.name} should throw an UnauthorizedException if token is expired`, () => {
    jest.spyOn(reflector, 'get').mockReturnValue(false);

    const mockContext = createExecutionContextMock({
      simplimuv_token: 'expired_token',
    });
    (useToken as jest.Mock).mockReturnValue({ isExpired: true });

    expect(() => guard.canActivate(mockContext)).toThrow(UnauthorizedException);
  });

  it(`${AuthGuard.prototype.canActivate.name} should allow access if token is valid`, () => {
    jest.spyOn(reflector, 'get').mockReturnValue(false);

    const mockContext = createExecutionContextMock({
      simplimuv_token: 'valid_token',
    });
    (useToken as jest.Mock).mockReturnValue({
      isExpired: false,
      sub: { userId: 1 },
    });

    expect(guard.canActivate(mockContext)).toBe(true);
  });
});
