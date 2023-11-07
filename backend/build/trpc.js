"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    mergeRouters: function() {
        return mergeRouters;
    },
    middleware: function() {
        return middleware;
    },
    publicProcedure: function() {
        return publicProcedure;
    },
    router: function() {
        return router;
    },
    userProcedure: function() {
        return userProcedure;
    }
});
const _server = require("@trpc/server");
// You can use any variable name you like.
// We use t to keep things simple.
const t = _server.initTRPC.context().create();
const router = t.router;
const mergeRouters = t.mergeRouters;
const middleware = t.middleware;
const publicProcedure = t.procedure;
const userProcedure = t.procedure.use(t.middleware(({ next, ctx })=>{
    const { jwt, userAuthClient } = ctx;
    if (!jwt || !userAuthClient) {
        throw new _server.TRPCError({
            code: 'UNAUTHORIZED'
        });
    }
    return next({
        ctx: {
            jwt,
            userAuthClient
        }
    });
}));

//# sourceMappingURL=trpc.js.map