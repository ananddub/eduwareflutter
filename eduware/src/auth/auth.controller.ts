import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/jwt/custom.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() createAuthDto: CreateAuthDto) {
        return this.authService.login(createAuthDto);
    }

    @Post('signup')
    signup(@Body() createAuthDto: CreateAuthDto) {
        return this.authService.signup(createAuthDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('refresh-token')
    refreshToken(@Req() req: any) {
        return this.authService.refreshToken(req.user);
    }
    @Get('db')
    getdb() {
        return ['sisdb'];
    }
}
