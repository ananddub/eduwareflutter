import 'dotenv/config';
export declare const DRIZZLE_CONNECTION: {
    provide: string;
    useFactory: () => Promise<import("drizzle-orm/mysql2").MySql2Database<Record<string, never>> & {
        $client: import("drizzle-orm/mysql2").AnyMySql2Connection;
    }>;
};
