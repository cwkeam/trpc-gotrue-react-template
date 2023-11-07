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
    createUserAuthClient: function() {
        return createUserAuthClient;
    },
    userAuthClient: function() {
        return userAuthClient;
    }
});
const _gotruejs = require("@supabase/gotrue-js");
const _crossfetch = /*#__PURE__*/ _interop_require_default(require("cross-fetch"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { GOTRUE_URL, GOTRUE_JWT_SECRET } = process.env;
const inMemoryStorageFactory = ()=>{
    let data = {};
    return {
        getItem: (key)=>data[key] ?? null,
        removeItem: (key)=>{
            data = Object.fromEntries(Object.entries(data).filter(([k])=>k !== key));
        },
        setItem: (key, value)=>{
            data = {
                ...data,
                [key]: value
            };
        }
    };
};
const userAuthClient = new _gotruejs.GoTrueClient({
    url: GOTRUE_URL,
    fetch: _crossfetch.default,
    autoRefreshToken: true,
    persistSession: true,
    storage: inMemoryStorageFactory()
});
const createUserAuthClient = (accessToken)=>new _gotruejs.GoTrueClient({
        url: GOTRUE_URL,
        fetch: _crossfetch.default,
        autoRefreshToken: true,
        persistSession: true,
        storage: inMemoryStorageFactory(),
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

//# sourceMappingURL=auth.js.map