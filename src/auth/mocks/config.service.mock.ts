export const ConfigServiceMock = {
  get: jest.fn((key: string) => {
    switch (key) {
      case 'AUTH_USER':
        return 'testUser';
      case 'AUTH_PASSWORD':
        return 'testPass';
      case 'JWT_SECRET':
        return 'secretKey';
      default:
        return null;
    }
  }),
};
