import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotographyModule } from './photography/photography.module';
import { DRIZZLE_CONNECTION } from './drizzles/drizzle.module';
import { AdmisionModule } from './admision/admision.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthModule } from './auth/auth.module';

@Global()
@Module({
    imports: [PhotographyModule, AdmisionModule, EventEmitterModule.forRoot(), AuthModule],
    controllers: [AppController],
    providers: [AppService, DRIZZLE_CONNECTION],
})
export class AppModule {}
