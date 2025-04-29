import { CreatePhotographyDto } from './dto/create-photography.dto';
import { UpdatePhotographyDto } from './dto/update-photography.dto';
import { AnyMySql2Connection, MySql2Database } from 'drizzle-orm/mysql2';
import { Observable } from 'rxjs';
export declare class PhotographyService {
    private db;
    private eventSubject;
    constructor(db: MySql2Database<Record<string, never>> & {
        $client: AnyMySql2Connection;
    });
    observeEvents(): Observable<any>;
    create(createPhotographyDto: CreatePhotographyDto, file: Express.Multer.File): Promise<{
        message: string;
        data: import("drizzle-orm/mysql2").MySqlRawQueryResult;
    }>;
    findAll(start?: number, end?: number): Promise<{
        admno: string;
        name: string;
        url: string;
        size: number;
        type: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        data: {
            admno: string;
            name: string;
            url: string;
            size: number;
            type: string;
            createdAt: Date;
        }[];
    }>;
    update(id: string, updatePhotographyDto: UpdatePhotographyDto, file: Express.Multer.File): Promise<{
        message: string;
        data: import("drizzle-orm/mysql2").MySqlRawQueryResult;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
