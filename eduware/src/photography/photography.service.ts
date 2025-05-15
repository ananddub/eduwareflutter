import {
    BadRequestException,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { CreatePhotographyDto } from './dto/create-photography.dto';
import { UpdatePhotographyDto } from './dto/update-photography.dto';
import { DRIZZLE_CLIENT, EXCEL_CREATE } from 'src/constant';
import { tblPhoto, tblAdmission } from 'src/db/schema';
import { AnyMySql2Connection, MySql2Database } from 'drizzle-orm/mysql2';
import { and, eq, gte } from 'drizzle-orm';
import { Subject, Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { getYearRange } from 'src/date.service';

@Injectable()
export class PhotographyService {
    private eventSubject = new Subject<any>();

    constructor(
        private eventEmitter: EventEmitter2,
        @Inject(DRIZZLE_CLIENT)
        private db: MySql2Database<Record<string, never>> & {
            $client: AnyMySql2Connection;
        },
    ) {}

    observeEvents(): Observable<any> {
        return this.eventSubject.asObservable();
    }

    async create(
        createPhotographyDto: CreatePhotographyDto,
        file: Express.Multer.File,
    ) {
        try {
            if (!file) {
                throw new BadRequestException('File is required.');
            }

            const { admno } = createPhotographyDto;
            if (!admno) {
                throw new BadRequestException(
                    'Admission number (admno) is required.',
                );
            }
            const dup = await this.db
                .select()
                .from(tblPhoto)
                .where(eq(tblPhoto.admno, admno));
            let newPhotography;
            if (dup.length > 0) {
                newPhotography = await this.db
                    .update(tblPhoto)
                    .set({
                        admno: createPhotographyDto.admno,
                        name: file.fieldname,
                        url: file.path,
                        size: file.size,
                        type: file.mimetype,
                    })
                    .where(eq(tblPhoto.admno, admno));

                // Emit an event after successful creation
                this.eventSubject.next({
                    action: 'update',
                    data: {
                        admno,
                        newPhotography,
                    },
                });
            } else {
                newPhotography = await this.db.insert(tblPhoto).values({
                    admno: createPhotographyDto.admno,
                    name: file.fieldname,
                    url: file.path,
                    size: file.size,
                    type: file.mimetype,
                });

                // Emit an event after successful creation
                this.eventSubject.next({
                    action: 'created',
                    data: {
                        admno,
                        newPhotography,
                    },
                });
            }
            const data = await this.db
                .select({
                    class: tblAdmission.class,
                    section: tblAdmission.section,
                })
                .from(tblAdmission)
                .where(eq(tblPhoto.admno, admno))
                .limit(1);
            if (data.length > 0) {
                this.eventEmitter.emit(EXCEL_CREATE, {
                    class: data[0].class,
                    section: data[0].section,
                });
            }

            return {
                message: 'Photography created successfully.',
                data: newPhotography,
            };
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Failed to create photography.',
            );
        }
    }

    async findAll({
        cl = 'X',
        roll = -1,
        section = '',
        session = getYearRange(),
    }: {
        cl: string;
        roll: number;
        section: string;
        session: string;
    }) {
        try {
            const value = await this.db
                .select()
                .from(tblAdmission)
                .innerJoin(tblPhoto, eq(tblAdmission.admno, tblPhoto.admno))
                .where(
                    and(
                        eq(tblAdmission.class, cl),
                        eq(tblAdmission.session, session),
                        gte(tblAdmission.roll, roll),
                        section === ''
                            ? undefined
                            : eq(tblAdmission.section, section),
                    ),
                );
            return value;
        } catch {
            throw new InternalServerErrorException(
                'Failed to fetch photography records.',
            );
        }
    }

    async findOne(id: string, session: string = '2022-2025') {
        try {
            if (!id) {
                throw new BadRequestException('ID parameter is required.');
            }
            const photo = await this.db
                .select()
                .from(tblAdmission)
                .innerJoin(tblPhoto, eq(tblPhoto.admno, tblAdmission.admno))
                .where(
                    and(
                        eq(tblAdmission.session, session),
                        eq(tblPhoto.admno, id),
                    ),
                );

            if (!photo || photo.length === 0) {
                throw new NotFoundException('Photography not found.');
            }
            return { data: photo };
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Failed to fetch photography.',
            );
        }
    }

    async update(
        id: string,
        updatePhotographyDto: UpdatePhotographyDto,
        file: Express.Multer.File,
    ) {
        try {
            if (!id) {
                throw new BadRequestException('ID parameter is required.');
            }

            if (!file) {
                throw new BadRequestException('File is required.');
            }

            const updatedPhotography = await this.db
                .update(tblPhoto)
                .set({
                    name: file.fieldname,
                    url: file.path,
                    size: file.size,
                    type: file.mimetype,
                })
                .where(eq(tblPhoto.admno, id));

            if (!updatedPhotography) {
                throw new NotFoundException(
                    'Photography not found or update failed.',
                );
            }

            // Emit an event after successful update
            this.eventSubject.next({
                action: 'updated',
                data: updatedPhotography,
            });

            return {
                message: 'Photography updated successfully.',
                data: updatedPhotography,
            };
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Failed to update photography.',
            );
        }
    }

    async remove(id: string) {
        try {
            if (!id) {
                throw new BadRequestException('ID parameter is required.');
            }

            const deletedPhotography = await this.db
                .delete(tblPhoto)
                .where(eq(tblPhoto.admno, id));

            if (!deletedPhotography) {
                throw new NotFoundException(
                    'Photography not found or deletion failed.',
                );
            }

            this.eventSubject.next({
                action: 'deleted',
                data: { admno: id },
            });

            return {
                message: 'Photography deleted successfully.',
            };
        } catch (error) {
            throw new InternalServerErrorException(
                error.message || 'Failed to delete photography.',
            );
        }
    }
}
