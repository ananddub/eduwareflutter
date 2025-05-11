import { Module } from '@nestjs/common';
import { PhotographyService } from './photography.service';
import { PhotographyController } from './photography.controller';
import { MulterModule } from '@nestjs/platform-express';
import { DRIZZLE_CONNECTION } from 'src/drizzles/drizzle.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { JwtModule } from '@nestjs/jwt';

MulterModule.register({
    dest: './uploads',
    limits: { fileSize: 1024 * 1024 * 100 },
});
@Module({
    imports: [EventEmitterModule.forRoot(), JwtModule],
    controllers: [PhotographyController],
    providers: [PhotographyService, DRIZZLE_CONNECTION],
})
export class PhotographyModule {}
