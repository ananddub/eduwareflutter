import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { AdmisionService } from './admision.service';
import { CreateAdmisionDto } from './dto/create-admision.dto';
import { UpdateAdmisionDto } from './dto/update-admision.dto';

@Controller('admision')
export class AdmisionController {
    constructor(private readonly admisionService: AdmisionService) {}

    @Post()
    create(@Body() createAdmisionDto: CreateAdmisionDto) {
        return this.admisionService.create(createAdmisionDto);
    }

    @Get()
    async findAll() {
        return {
            status: 200,
            message: 'success',
            data: await this.admisionService.findAll(),
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
