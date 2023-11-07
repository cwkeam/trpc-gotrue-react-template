"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const trpc_1 = require("../trpc");
const user_1 = __importDefault(require("./user"));
const routes = (0, trpc_1.router)({
    user: user_1.default,
    test: (0, trpc_1.router)({
        testRoute: trpc_1.publicProcedure
            .input(zod_1.z.undefined())
            .query(async ({ ctx: { datasource, jwt } }) => {
            return 'happy';
        }),
    }),
});
exports.default = routes;
