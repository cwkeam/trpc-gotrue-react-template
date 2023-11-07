"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MBDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
// will convert to aliased import once we fix ESM alias import issue
exports.MBDataSource = new typeorm_1.DataSource({
    type: process.env.DATASOURCE_TYPE ?? "postgres",
    host: process.env.DATASOURCE_HOST,
    port: Number(process.env.DATASOURCE_PORT ?? 5432),
    username: process.env.DATASOURCE_USERNAME,
    password: process.env.DATASOURCE_PASSWORD,
    database: process.env.DATASOURCE_DATABASE,
    schema: "thetaone",
    logging: ["error"],
    entities: [
        `${__dirname}/models/**/*.model.ts`,
        `${__dirname}/models/**/*.model.js`,
    ],
    subscribers: [],
    migrations: [`${__dirname}/migrations/*.js`, `${__dirname}/migrations/*.ts`],
});
