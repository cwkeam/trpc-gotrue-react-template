"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lectureContentProcedure = exports.userProcedure = exports.publicProcedure = exports.middleware = exports.mergeRouters = exports.router = void 0;
const server_1 = require("@trpc/server");
// You can use any variable name you like.
// We use t to keep things simple.
const t = server_1.initTRPC.context().create();
exports.router = t.router;
exports.mergeRouters = t.mergeRouters;
exports.middleware = t.middleware;
exports.publicProcedure = t.procedure;
exports.userProcedure = t.procedure.use(t.middleware(({ next, ctx }) => {
    const { jwt, userAuthClient } = ctx;
    if (!jwt || !userAuthClient) {
        throw new server_1.TRPCError({
            code: 'UNAUTHORIZED',
        });
    }
    return next({
        ctx: {
            jwt,
            userAuthClient,
        },
    });
}));
exports.lectureContentProcedure = t.procedure.use(t.middleware(async ({ next, ctx, input }) => {
    const { jwt, userAuthClient, datasource } = ctx;
    if (!jwt || !userAuthClient) {
        throw new server_1.TRPCError({
            code: 'UNAUTHORIZED',
        });
    }
    return next({
        ctx: {
            jwt,
            datasource,
            userAuthClient,
        },
    });
}));
