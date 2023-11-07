"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAuthClient = exports.userAuthClient = exports.adminAuthClient = void 0;
const gotrue_js_1 = require("@supabase/gotrue-js");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { GOTRUE_URL, GOTRUE_JWT_SECRET } = process.env;
const revenuecatToken = jsonwebtoken_1.default.sign({
    role: 'revenuecat_admin',
}, GOTRUE_JWT_SECRET);
console.log('revenuecatToken', revenuecatToken);
const adminToken = jsonwebtoken_1.default.sign({
    role: 'supabase_admin',
}, GOTRUE_JWT_SECRET);
exports.adminAuthClient = new gotrue_js_1.GoTrueAdminApi({
    url: GOTRUE_URL,
    headers: {
        Authorization: `Bearer ${adminToken}`,
    },
    fetch: cross_fetch_1.default,
});
const inMemoryStorageFactory = () => {
    let data = {};
    return {
        getItem: key => data[key] ?? null,
        removeItem: key => {
            data = Object.fromEntries(Object.entries(data).filter(([k]) => k !== key));
        },
        setItem: (key, value) => {
            data = {
                ...data,
                [key]: value,
            };
        },
    };
};
exports.userAuthClient = new gotrue_js_1.GoTrueClient({
    url: GOTRUE_URL,
    fetch: cross_fetch_1.default,
    autoRefreshToken: true,
    persistSession: true,
    storage: inMemoryStorageFactory(),
});
const createUserAuthClient = (accessToken) => new gotrue_js_1.GoTrueClient({
    url: GOTRUE_URL,
    fetch: cross_fetch_1.default,
    autoRefreshToken: true,
    persistSession: true,
    storage: inMemoryStorageFactory(),
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
});
exports.createUserAuthClient = createUserAuthClient;
