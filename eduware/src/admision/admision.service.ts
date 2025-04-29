import { Inject, Injectable } from '@nestjs/common';
import { CreateAdmisionDto } from './dto/create-admision.dto';
import { UpdateAdmisionDto } from './dto/update-admision.dto';
import { DRIZZLE_CLIENT } from 'src/constant';
import { AnyMySql2Connection, MySql2Database } from 'drizzle-orm/mysql2';
import { tblAdmission } from 'src/db/schema';
import { eq, gte } from 'drizzle-orm';

@Injectable()
export class AdmisionService {
    constructor(
        @Inject(DRIZZLE_CLIENT)
        private db: MySql2Database<Record<string, never>> & {
            $client: AnyMySql2Connection;
        },
    ) {}
    create(createAdmisionDto: CreateAdmisionDto) {
        return 'This action adds a new admision';
    }

    findAll(session: string = '2024-2025') {
        return this.db
            .select()
            .from(tblAdmission)
            .where(eq(tblAdmission.session, session));
    }

    findOne(id: string) {
        return this.db
            .select()
            .from(tblAdmission)
            .where(eq(tblAdmission.admno, id));
    }

    update(id: number, updateAdmisionDto: UpdateAdmisionDto) {
        return `This action updates a #${id} admision`;
    }

    remove(id: number) {
        return `This action removes a #${id} admision`;
    }
}
