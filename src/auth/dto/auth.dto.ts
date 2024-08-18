import { ApiProperty } from '@nestjs/swagger';
import { AuthBody } from '../../interfaces/auth.interface';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO implements AuthBody {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}
