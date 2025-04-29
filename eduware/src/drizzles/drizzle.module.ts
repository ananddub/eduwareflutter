import { Module } from '@nestjs/common';
import 'dotenv/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { DRIZZLE_CLIENT } from 'src/constant';

export const DRIZZLE_CONNECTION = {
    provide: DRIZZLE_CLIENT,
    useFactory: async (config: ConfigService) => {
        const databaseUrl = process.env.DATABASE_URL;
        const client = await drizzle(databaseUrl);
        return client;
    },
};
