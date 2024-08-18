import { SetMetadata } from '@nestjs/common';
import { PUBLIC_KEY } from '../../constants/key-decorators';
// Este decorator logra que mi endpoint sea acceso publico
export const PublicAccess = () => SetMetadata(PUBLIC_KEY, true);