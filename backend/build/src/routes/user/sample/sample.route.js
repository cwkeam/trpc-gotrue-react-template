"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const trpc_1 = require("../../../trpc");
const keyPhraseRoute = (0, trpc_1.router)({
    sampleRoute: trpc_1.userProcedure
        .input(zod_1.z.object({
        sample: zod_1.z.string(),
    }))
        .query(async ({ input: { sample }, ctx: { datasource, jwt } }) => {
        return 'happy';
    }),
});
exports.default = keyPhraseRoute;
