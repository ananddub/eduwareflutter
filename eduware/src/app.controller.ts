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
import { OnEvent } from '@nestjs/event-emitter';
import { EXCEL_CREATE } from './constant';
import * as xlsx from 'xlsx';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('image/:id')
    async getImag(@Param('id') id: string, @Response() res: ExpressResponse) {
        const cpath = path.join(__dirname, `../../uploads/${id}.jpg`);
        if (fs.existsSync(cpath)) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            const file = fs.createReadStream(cpath);
            file.pipe(res);
        } else {
            throw new NotFoundException('File not found');
        }
    }
    @Get('excel/:session/:class')
    async getExcel(
        @Param('session') session: string,
        @Param('class') cl: string,
        @Response() res: ExpressResponse,
    ) {
        const data = await this.appService.getData(cl, session);
        if (data.length === 0) {
            throw new NotFoundException('No data found');
        }
        res.writeHead(200, {
            'Content-Type':
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(workbook, worksheet, 'PhotoGraphy');
        const buffer = xlsx.write(workbook, { type: 'buffer' });
        return buffer;
    }

    @Get('healthz')
    getHealth(): string {
        return this.appService.getHealth();
    }
    @OnEvent(EXCEL_CREATE)
    handleOrderCreatedEvent(payload: { class: string; session: string }) {
        this.appService.getData(payload.class, payload.session);
        // handle and process "ExcelCreatedEvent" event
    }
}
