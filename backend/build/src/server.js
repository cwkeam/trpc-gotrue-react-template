"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenWSS = exports.fastifyServer = void 0;
require("dotenv/config");
require("reflect-metadata");
const fastify_1 = require("@trpc/server/adapters/fastify");
const ws_1 = require("@trpc/server/adapters/ws");
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify_2 = __importDefault(require("fastify"));
const ws_2 = __importDefault(require("ws"));
// import notificationService from '@/integrations/notifications'
const app_1 = __importDefault(require("./app"));
const context_1 = __importDefault(require("./context"));
exports.fastifyServer = (0, fastify_2.default)({
    maxParamLength: 5000,
});
exports.fastifyServer.register(cors_1.default, {
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true);
        return callback(null, false);
    },
});
exports.fastifyServer.register(fastify_1.fastifyTRPCPlugin, {
    trpcOptions: {
        router: app_1.default,
        createContext: context_1.default,
        onError: ({ error }) => {
            //^?
            console.log(error);
        },
    },
});
// fastifyServer.register(notificationService, {
// 	secret: process.env.NOTIFICATION_SECRET!,
// })
const listenWSS = (port) => {
    const wss = new ws_2.default.Server({
        port,
        host: '0.0.0.0',
    });
    const handler = (0, ws_1.applyWSSHandler)({ wss, router: app_1.default, createContext: context_1.default });
    wss.on('connection', (ws, req) => {
        console.log(`➕➕ Connection (${wss.clients.size})`);
        ws.once('close', () => {
            console.log(`➖➖ Connection (${wss.clients.size})`);
        });
    });
    process.on('beforeExit', () => {
        handler.broadcastReconnectNotification();
        wss.close();
    });
    process.on('SIGTERM', () => {
        console.log('SIGTERM');
        handler.broadcastReconnectNotification();
        wss.close();
    });
    return wss;
};
exports.listenWSS = listenWSS;
