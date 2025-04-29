import { Inject, Injectable } from '@nestjs/common';
import { CreatePhotographyDto } from './dto/create-photography.dto';
import { UpdatePhotographyDto } from './dto/update-photography.dto';
import { DRIZZLE_CLIENT } from 'src/constant';
import { tbl_photo } from 'src/db/schema';
import { AnyMySql2Connection, MySql2Database } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';
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

            const newPhotography = await this.db.insert(tbl_photo).values({
                admno: createPhotographyDto.admno,
                name: file.fieldname,
                url: file.path,
                size: file.size,
                type: file.mimetype,
            });

            // Emit an event after successful creation
            this.eventSubject.next({
                action: 'created',
                data: newPhotography,
            });

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

    async findAll(start: number = 0, end: number = 30) {
        try {
            const photos = await this.db
                .select()
                .from(tbl_photo)
                .limit(end - start)
                .offset(start);
            return photos;
        } catch (error) {
            throw new HttpException(
                'Failed to fetch photography records.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findOne(id: string) {
        try {
            if (!id) {
                throw new HttpException(
                    'ID parameter is required.',
                    HttpStatus.BAD_REQUEST,
                );
            }

            const photo = await this.db
                .select()
                .from(tbl_photo)
                .where(eq(tbl_photo.admno, id));

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
                .update(tbl_photo)
                .set({
                    name: file.fieldname,
                    url: file.path,
                    size: file.size,
                    type: file.mimetype,
                })
                .where(eq(tbl_photo.admno, id));

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
                .delete(tbl_photo)
                .where(eq(tbl_photo.admno, id));

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
