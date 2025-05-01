import { Inject, Injectable } from '@nestjs/common';
import { CreatePhotographyDto } from './dto/create-photography.dto';
import { UpdatePhotographyDto } from './dto/update-photography.dto';
import { DRIZZLE_CLIENT } from 'src/constant';
import { tblPhoto, tblAdmission } from 'src/db/schema';
import { AnyMySql2Connection, MySql2Database } from 'drizzle-orm/mysql2';
import { and, eq, gte } from 'drizzle-orm';
import { Subject, Observable } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class PhotographyService {
    private eventSubject = new Subject<any>();

    constructor(
        @Inject(DRIZZLE_CLIENT)
        private db: MySql2Database<Record<string, never>> & {
            $client: AnyMySql2Connection;
        },
    ) {}

    // Method to return the Observable stream of events
    observeEvents(): Observable<any> {
        return this.eventSubject.asObservable();
    }

    async create(
        createPhotographyDto: CreatePhotographyDto,
        file: Express.Multer.File,
    ) {
        try {
            if (!file) {
                throw new HttpException(
                    'File is required.',
                    HttpStatus.BAD_REQUEST,
                );
            }

            const { admno } = createPhotographyDto;
            if (!admno) {
                throw new HttpException(
                    'Admission number (admno) is required.',
                    HttpStatus.BAD_REQUEST,
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

            return {
                message: 'Photography created successfully.',
                data: newPhotography,
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to create photography.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findAll({
        cl = 'X',
        roll = -1,
        section = '',
        session = '2024-2025',
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
            throw new HttpException(
                'Failed to fetch photography records.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findOne(id: string, session: string = '2022-2025') {
        try {
            if (!id) {
                throw new HttpException(
                    'ID parameter is required.',
                    HttpStatus.BAD_REQUEST,
                );
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
                throw new HttpException(
                    'Photography not found.',
                    HttpStatus.NOT_FOUND,
                );
            }
            return { data: photo };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to fetch photography.',
                HttpStatus.INTERNAL_SERVER_ERROR,
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
                throw new HttpException(
                    'ID parameter is required.',
                    HttpStatus.BAD_REQUEST,
                );
            }

            if (!file) {
                throw new HttpException(
                    'File is required.',
                    HttpStatus.BAD_REQUEST,
                );
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
                throw new HttpException(
                    'Photography not found or update failed.',
                    HttpStatus.NOT_FOUND,
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
            throw new HttpException(
                error.message || 'Failed to update photography.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async remove(id: string) {
        try {
            if (!id) {
                throw new HttpException(
                    'ID parameter is required.',
                    HttpStatus.BAD_REQUEST,
                );
            }

            const deletedPhotography = await this.db
                .delete(tblPhoto)
                .where(eq(tblPhoto.admno, id));

            if (!deletedPhotography) {
                throw new HttpException(
                    'Photography not found or deletion failed.',
                    HttpStatus.NOT_FOUND,
                );
            }

            // Emit an event after successful deletion
            this.eventSubject.next({
                action: 'deleted',
                data: { admno: id },
            });

            return {
                message: 'Photography deleted successfully.',
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to delete photography.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
