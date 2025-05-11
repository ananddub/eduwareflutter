import { Inject, Injectable } from '@nestjs/common';
import { CreateAdmisionDto } from './dto/create-admision.dto';
import { UpdateAdmisionDto } from './dto/update-admision.dto';
import { DRIZZLE_CLIENT } from 'src/constant';
import { AnyMySql2Connection, MySql2Database } from 'drizzle-orm/mysql2';
import { tblPhoto, tblAdmission } from 'src/db/schema';
import { and, count, eq, gte, isNotNull, not, or } from 'drizzle-orm';

@Injectable()
export class AdmisionService {
    constructor(
        @Inject(DRIZZLE_CLIENT)
        private db: MySql2Database<Record<string, never>> & {
            $client: AnyMySql2Connection;
        },
    ) {}
    create(createAdmisionDto: CreateAdmisionDto) {
        return (
            'This action adds a new admision' +
            JSON.stringify(createAdmisionDto)
        );
    }

    async test({
        cl = 'X',
        roll = -1,
        section = 'A',
        session = '2024-2025',
    }: {
        cl: string;
        start: number;
        section: string;
        end: number;
        roll: number;
        session: string;
    }) {
        return (
            await this.db
                .select()
                .from(tblAdmission)
                .leftJoin(tblPhoto, eq(tblAdmission.admno, tblPhoto.admno))
                .where(
                    and(
                        eq(tblAdmission.class, cl),
                        eq(tblAdmission.session, session),
                        gte(tblAdmission.roll, roll),
                        eq(tblAdmission.section, section),
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
    }

    async findAll({
        cl = 'X',
        roll = -1,
        section = 'A',
        session = '2024-2025',
    }: {
        cl: string;
        start: number;
        section: string;
        end: number;
        roll: number;
        session: string;
    }) {
        return await this.db
            .select({
                tblPhoto: tblPhoto,
                tblAdmission: tblAdmission,
            })
            .from(tblAdmission)
            .leftJoin(tblPhoto, eq(tblAdmission.admno, tblPhoto.admno))
            .where(
                and(
                    eq(tblAdmission.class, cl),
                    eq(tblAdmission.session, session),
                    gte(tblAdmission.roll, roll),
                    eq(tblAdmission.section, section),
                ),
            )
            .orderBy(tblAdmission.roll);
    }

    findOne(id: string) {
        return this.db
            .select({
                tblPhoto: tblPhoto,
                tblAdmission: tblAdmission,
            })
            .from(tblAdmission)
            .leftJoin(tblPhoto, eq(tblAdmission.admno, tblPhoto.admno))
            .where(eq(tblAdmission.admno, id));
    }

    update(id: number, updateAdmisionDto: UpdateAdmisionDto) {
        return `This action updates a #${id} admision`;
    }

    remove(id: number) {
        return `This action removes a #${id} admision`;
    }
}
