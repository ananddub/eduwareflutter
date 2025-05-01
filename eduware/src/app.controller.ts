import {
    Controller,
    Get,
    NotFoundException,
    Param,
    Response,
} from '@nestjs/common';
import * as fs from 'node:fs';
import { AppService } from './app.service';
import * as path from 'node:path';
import { Response as ExpressResponse } from 'express';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('image/:id')
    async getImag(@Param('id') id: string, @Response() res: ExpressResponse) {
        const cpath = path.join(__dirname, `../../uploads/${id}.jpg`);
        if (fs.existsSync(cpath)) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            const stream = fs.createReadStream(cpath);
            stream.pipe(res);
        } else {
            throw new NotFoundException('File not found');
        }
    }

    @Get('healthz')
    getHealth(): string {
        return this.appService.getHealth();
    }
}
