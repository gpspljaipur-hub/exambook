import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TokensService } from '../tokens/tokens.service';
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private tokensService: TokensService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isValid = (await super.canActivate(context)) as boolean;

    if (!isValid) {
      throw new UnauthorizedException('Invalid JWT');
    }
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('No token');
    }

    const token = authHeader.split(' ')[1];
    const tokenExists = await this.tokensService.findToken(token);
    if (!tokenExists) {
      throw new UnauthorizedException('Token not found in DB');
    }

    return true;
  }
}
