import { Module } from '@nestjs/common';
import { AdmisionService } from './admision.service';
import { AdmisionController } from './admision.controller';
import { DRIZZLE_CONNECTION } from 'src/drizzles/drizzle.module';

@Module({
    controllers: [AdmisionController],
    providers: [AdmisionService, DRIZZLE_CONNECTION],
})
export class AdmisionModule {}
