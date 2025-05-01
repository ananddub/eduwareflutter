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
    NotFoundException,
    Headers,
} from '@nestjs/common';
import { PhotographyService } from './photography.service';
import { UpdatePhotographyDto } from './dto/update-photography.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { STATUS_CODES } from 'http';

@Controller('photo')
export class PhotographyController {
    constructor(private readonly photographyService: PhotographyService) {}

    @Post()
    @UseInterceptors(
        FilesInterceptor('file', 10, {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const filename = req.header('admno');
                    if (!file || !filename) {
                        console.log('File or admno not found in Header');
                        return callback(
                            new NotFoundException(
                                `File or admno not found in Header  `,
                            ),
                            null,
                        );
                    }
                    callback(null, `${filename}.jpg`);
                },
            }),
            limits: {
                fileSize: 100 * 1024 * 1024,
            },
        }),
    )
    async create(
        @UploadedFiles() files: Express.Multer.File[],
        @Headers() header,
    ) {
        return {
            status: STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.create(
                {
                    admno: header.admno,
                },
                files[0],
            ),
        };
    }

    // cl = 'X',
    //         roll = -1,
    //         section = '',
    //         session = '2024-2025',
    @Get()
    async findAll(
        @Query('class') classId: string,
        @Query('section') section: string,
        @Query('session') session: string,
    ) {
        return {
            status: STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.findAll({
                cl: classId,
                roll: -1,
                section,
                session,
            }),
        };
    }

    @Get('find/:id')
    async findOne(@Param('id') id: string, @Query('session') session: string) {
        return {
            status: STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.findOne(id, session),
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

    @Sse('event')
    async getEvents() {
        return await this.photographyService.observeEvents();
    }
}
