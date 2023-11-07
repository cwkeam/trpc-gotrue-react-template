"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _zod = require("zod");
const _trpc = require("../../../trpc");
const keyPhraseRoute = (0, _trpc.router)({
    sampleRoute: _trpc.userProcedure.input(_zod.z.object({
        sample: _zod.z.string()
    })).query(async ({ input: { sample }, ctx: { datasource, jwt } })=>{
        return 'Hello World' + sample + ' ' + jwt.sub;
    })
});
const _default = keyPhraseRoute;

//# sourceMappingURL=sample.route.js.map