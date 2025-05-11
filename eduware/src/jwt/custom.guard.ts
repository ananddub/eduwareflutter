// auth/jwt-auth.guard.ts
import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { SECRET_KEY } from 'src/constant';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException('Token not found or expire');
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: SECRET_KEY,
            });
            request['user'] = payload;

            console.log(request['user']);
            request['user']['iat'] = request['user']['exp'];
            const exp = request['user']['exp'];
            const date = Math.floor(Date.now() / 1000);
            if (exp < date) {
                throw new UnauthorizedException('Token not found or expire');
            }
            // request['user']['iat'] = 0;
            delete request['user']['exp'];
        } catch (e) {
            throw new UnauthorizedException('Invalid or expired token');
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const authHeader = request.headers.authorization;
        if (!authHeader) return undefined;

        const [type, token] = authHeader.split(' ');
        return type === 'Bearer' ? token : undefined;
    }
}
