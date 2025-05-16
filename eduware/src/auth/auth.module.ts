import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DRIZZLE_CONNECTION } from 'src/drizzle/drizzle.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt/jwt.strategy';
import { SECRET_KEY } from 'src/constant';
import { JwtRefreshStrategy } from 'src/jwt/jwt.refresh.staregy';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule],
    controllers: [AuthController],
    providers: [
        AuthService,
        DRIZZLE_CONNECTION,
        JwtStrategy,
        JwtRefreshStrategy,
    ],
})
export class AuthModule {}
