import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    UploadedFiles,
    Sse,
    Query,
} from '@nestjs/common';
import { PhotographyService } from './photography.service';
import { CreatePhotographyDto } from './dto/create-photography.dto';
import { UpdatePhotographyDto } from './dto/update-photography.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { STATUS_CODES } from 'http';
import { Observable } from 'rxjs';

@Controller('photo')
export class PhotographyController {
    constructor(private readonly photographyService: PhotographyService) {}

    @Post()
    @UseInterceptors(
        FilesInterceptor('file', 10, {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const uniqueSuffix =
                        Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = extname(file.originalname);
                    callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
                },
            }),
            limits: {
                fileSize: 100 * 1024 * 1024,
            },
            fileFilter: (req, file, cb) => {
                if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
                    return cb(
                        new Error('Only image files are allowed!'),
                        false,
                    );
                }
                cb(null, true);
            },
        }),
    )
    async create(
        @UploadedFiles() files: Express.Multer.File[],
        @Body() createPhotographyDto: CreatePhotographyDto,
    ) {
        return {
            status: STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.create(
                createPhotographyDto,
                files[0],
            ),
        };
    }

    @Get()
    async findAll(@Query('start') start: number, @Query('end') end: number) {
        if (end == 0) end = 30;
        return {
            status: STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.findAll(start, end),
        };
    }

    @Get('find/:id')
    async findOne(@Param('id') id: string) {
        return {
            status: STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.findOne(id),
        };
    }

    @Patch(':id')
    @UseInterceptors(
        FilesInterceptor('file', 10, {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const uniqueSuffix =
                        Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = extname(file.originalname);
                    callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
                },
            }),
            limits: {
                fileSize: 100 * 1024 * 1024,
            },
            fileFilter: (req, file, cb) => {
                if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
                    return cb(
                        new Error('Only image files are allowed!'),
                        false,
                    );
                }
                cb(null, true);
            },
        }),
    )
    async update(
        @Param('id') id: string,
        @Body() updatePhotographyDto: UpdatePhotographyDto,
        @UploadedFiles() files: Express.Multer.File[],
    ) {
        return {
            status: STATUS_CODES.OK,
            message: 'success',
            data: this.photographyService.update(
                id,
                updatePhotographyDto,
                files[0],
            ),
        };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return {
            status: STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.remove(id),
        };
    }

    @Sse('stream')
    async getEvents() {
        console.log('getEvents');
        return await this.photographyService.observeEvents();
        // return 'hello world';
    }
}
