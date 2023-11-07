"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("./auth");
const datasource_1 = require("./datasource");
const createContext = async (options) => {
    const datasource = datasource_1.MBDataSource;
    if (!datasource.isInitialized) {
        await datasource.initialize();
    }
    const authorization = options.req.headers.authorization;
    const accessToken = authorization?.match(/Bearer (.+)/)?.[1];
    try {
        if (!accessToken) {
            throw new Error('token does not exist');
        }
        const token = jsonwebtoken_1.default.verify(accessToken, process.env.GOTRUE_JWT_SECRET);
        if (token.role === 'revenuecat_admin') {
            return {
                datasource,
                // @ts-ignore
                userAuthClient: null,
                jwt: { ...token, accessToken },
            };
        }
        else {
            const userAuthClient = (0, auth_1.createUserAuthClient)(accessToken);
            return {
                datasource,
                userAuthClient,
                jwt: token,
            };
        }
    }
    catch (error) {
        return {
            datasource,
        };
    }
};
exports.default = createContext;
