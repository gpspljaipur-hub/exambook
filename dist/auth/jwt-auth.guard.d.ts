import { ExecutionContext } from '@nestjs/common';
import { TokensService } from '../tokens/tokens.service';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private tokensService;
    constructor(tokensService: TokensService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
