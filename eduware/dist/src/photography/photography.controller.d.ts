import { PhotographyService } from './photography.service';
import { CreatePhotographyDto } from './dto/create-photography.dto';
import { UpdatePhotographyDto } from './dto/update-photography.dto';
import { Observable } from 'rxjs';
export declare class PhotographyController {
    private readonly photographyService;
    constructor(photographyService: PhotographyService);
    create(files: Express.Multer.File[], createPhotographyDto: CreatePhotographyDto): Promise<{
        status: string;
        message: string;
        data: {
            message: string;
            data: import("drizzle-orm/mysql2").MySqlRawQueryResult;
        };
    }>;
    findAll(start: number, end: number): Promise<{
        status: string;
        message: string;
        data: {
            admno: string;
            name: string;
            url: string;
            size: number;
            type: string;
            createdAt: Date;
        }[];
    }>;
    findOne(id: string): Promise<{
        status: string;
        message: string;
        data: {
            data: {
                admno: string;
                name: string;
                url: string;
                size: number;
                type: string;
                createdAt: Date;
            }[];
        };
    }>;
    update(id: string, updatePhotographyDto: UpdatePhotographyDto, files: Express.Multer.File[]): Promise<{
        status: string;
        message: string;
        data: Promise<{
            message: string;
            data: import("drizzle-orm/mysql2").MySqlRawQueryResult;
        }>;
    }>;
    remove(id: string): Promise<{
        status: string;
        message: string;
        data: {
            message: string;
        };
    }>;
    getEvents(): Promise<Observable<any>>;
}
