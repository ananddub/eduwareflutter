import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotographyModule } from './photography/photography.module';
import { DRIZZLE_CONNECTION } from './drizzles/drizzle.module';
import { AdmisionModule } from './admision/admision.module';

@Global()
@Module({
    imports: [PhotographyModule, AdmisionModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
