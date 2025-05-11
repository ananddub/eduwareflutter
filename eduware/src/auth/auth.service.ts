import {
    Inject,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { DRIZZLE_CLIENT, SECRET_KEY } from 'src/constant';
import { AnyMySql2Connection, MySql2Database } from 'drizzle-orm/mysql2';
import {
    tblAuth,
    tblEmpatt,
    tblEmpattsetting,
    tblEmployeesetting,
} from 'src/db/schema';
import { eq } from 'drizzle-orm';
import { checkPassword, hashPassword } from 'src/password';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        @Inject(DRIZZLE_CLIENT)
        private db: MySql2Database<Record<string, never>> & {
            $client: AnyMySql2Connection;
        },
    ) {}
    async getTokens(userId: string, data: Object) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                { sub: userId, ...data },
                { secret: SECRET_KEY, expiresIn: '15m' },
            ),
            this.jwtService.signAsync(
                { sub: userId, ...data },
                { secret: SECRET_KEY, expiresIn: '30d' },
            ),
        ]);
        return { accessToken, refreshToken };
    }
    async login(payload: CreateAuthDto) {
        const data = await this.db
            .select()
            .from(tblAuth)
            .where(eq(tblAuth.phoneNo, payload.phone));
        if (data.length == 0) {
            return new NotFoundException('phone number is invalid');
        }
        const cp = checkPassword(payload.phone, data[0].phoneNo);
        if (!cp) {
            return new NotFoundException('phone number is invalid');
        }
        const mdata = await this.db
            .select()
            .from(tblEmployeesetting)
            .where(eq(tblEmployeesetting.phone, payload.phone));
        if (mdata.length == 0) {
            return new NotFoundException('phone number is invalid');
        }

        return {
            data: {
                ...mdata,
                role: data[0].role,
                ...(await this.getTokens(data[0].phoneNo!, data)),
            },
        };
    }

    async signup(payload: CreateAuthDto) {
        const mdata = await this.db
            .select()
            .from(tblEmployeesetting)
            .where(eq(tblEmployeesetting.phone, payload.phone));
        if (mdata.length == 0) {
            return new NotFoundException('phone number is invalid');
        }
        await this.db.insert(tblAuth).values({
            phoneNo: payload.phone,
            database: payload.database,
            password: await hashPassword(payload.password),
        });
        return {
            message: 'sucessfully created user',
            data: null,
        };
    }

    async refreshToken(data: any) {
        return {
            ...(await this.getTokens(data.phoneNo, data)),
        };
    }
}
