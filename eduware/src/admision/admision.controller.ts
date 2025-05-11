import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Res,
    Delete,
    Query,
    UseGuards,
} from '@nestjs/common';
import { AdmisionService } from './admision.service';
import { CreateAdmisionDto } from './dto/create-admision.dto';
import { UpdateAdmisionDto } from './dto/update-admision.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/jwt/custom.guard';

// @UseGuards(JwtAuthGuard)
@Controller('admision')
export class AdmisionController {
    constructor(private readonly admisionService: AdmisionService) {}

    @Post()
    create(@Body() createAdmisionDto: CreateAdmisionDto) {
        return this.admisionService.create(createAdmisionDto);
    }

    @Get()
    async findAll(
        @Query('class') cl: string = 'X',
        @Query('section') section: string = 'A',
        @Query('session') session: string = '2024-2025',
        @Query('start') start: number = 0,
        @Query('end') end: number = 30,
        @Query('roll') roll: number = -1,
    ) {
        return {
            status: 200,
            message: 'success',
            data: await this.admisionService.findAll({
                cl,
                start,
                section,
                end,
                roll,
                session,
            }),
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return {
            status: 200,
            message: 'success',
            data: await this.admisionService.findOne(id),
        };
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateAdmisionDto: UpdateAdmisionDto,
    ) {
        return this.admisionService.update(+id, updateAdmisionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.admisionService.remove(+id);
    }
}
