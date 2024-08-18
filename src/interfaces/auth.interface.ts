export interface PayloadToken {
  sub: string;
}

export interface AuthBody {
  username: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface AuthTokenResult {
  sub: string;
  iat: number;
  exp: number;
}

export interface IUseToken {
  sub: string;
  isExpired: boolean;
}
