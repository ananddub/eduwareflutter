import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
export declare const DRIZZLE_CONNECTION: {
    provide: string;
    useFactory: (config: ConfigService) => Promise<import("drizzle-orm/mysql2").MySql2Database<Record<string, never>> & {
        $client: import("drizzle-orm/mysql2").AnyMySql2Connection;
    }>;
};
