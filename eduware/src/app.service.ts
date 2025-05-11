import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE_CLIENT } from './constant';
import { AnyMySql2Connection, MySql2Database } from 'drizzle-orm/mysql2';
import { tblAdmission, tblPhoto } from './db/schema';
import { and, eq } from 'drizzle-orm';
import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
    constructor(
        @Inject(DRIZZLE_CLIENT)
        private readonly db: MySql2Database<Record<string, never>> & {
            $client: AnyMySql2Connection;
        },
    ) {}

    getHello(): string {
        return 'Hello World!';
    }

    getHealth(): string {
        return 'Health';
    }

    async getData(cl: string, session: string) {
        const data = (
            await this.db
                .select()
                .from(tblAdmission)
                .leftJoin(tblPhoto, eq(tblAdmission.admno, tblPhoto.admno))
                .where(
                    and(
                        eq(tblAdmission.class, cl),
                        eq(tblAdmission.session, session),
                        eq(tblPhoto.admno, tblAdmission.admno),
                    ),
                )
                .orderBy(tblAdmission.roll)
        ).map((data) => {
            return {
                ...data.tbl_admission,
                ...data.tbl_photo,
            };
        });
        return data;
    }
}
