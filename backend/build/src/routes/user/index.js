"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("../../trpc");
const sample_route_1 = __importDefault(require("./sample/sample.route"));
const userRoutes = (0, trpc_1.mergeRouters)(sample_route_1.default);
exports.default = userRoutes;
