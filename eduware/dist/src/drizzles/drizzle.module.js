"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DRIZZLE_CONNECTION = void 0;
require("dotenv/config");
const mysql2_1 = require("drizzle-orm/mysql2");
const constant_1 = require("../constant");
exports.DRIZZLE_CONNECTION = {
    provide: constant_1.DRIZZLE_CLIENT,
    useFactory: async () => {
        const databaseUrl = process.env.DATABASE_URL;
        const client = (0, mysql2_1.drizzle)(databaseUrl);
        return client;
    },
};
//# sourceMappingURL=drizzle.module.js.map