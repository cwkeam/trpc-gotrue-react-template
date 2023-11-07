"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MBDataSource", {
    enumerable: true,
    get: function() {
        return MBDataSource;
    }
});
require("dotenv/config");
require("reflect-metadata");
const _typeorm = require("typeorm");
const MBDataSource = new _typeorm.DataSource({
    type: process.env.DATASOURCE_TYPE ?? 'postgres',
    host: process.env.DATASOURCE_HOST,
    port: Number(process.env.DATASOURCE_PORT ?? 5432),
    username: process.env.DATASOURCE_USERNAME,
    password: process.env.DATASOURCE_PASSWORD,
    database: process.env.DATASOURCE_DATABASE,
    schema: 'thetaone',
    logging: [
        'error'
    ],
    entities: [
        `${__dirname}/models/**/*.model.ts`,
        `${__dirname}/models/**/*.model.js`
    ],
    subscribers: [],
    migrations: [
        `${__dirname}/migrations/*.js`,
        `${__dirname}/migrations/*.ts`
    ]
});

//# sourceMappingURL=datasource.js.map