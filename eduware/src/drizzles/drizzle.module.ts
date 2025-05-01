import 'dotenv/config';
import mysql from 'mysql2/promise';

import { drizzle } from 'drizzle-orm/mysql2';
import { DRIZZLE_CLIENT } from 'src/constant';

export const DRIZZLE_CONNECTION = {
    provide: DRIZZLE_CLIENT,
    useFactory: async () => {
        const databaseUrl = process.env.DATABASE_URL;

        const client = drizzle(databaseUrl);
        return client;
    },
};
