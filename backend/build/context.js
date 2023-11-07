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
const _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
const _auth = require("./auth");
const _datasource = require("./datasource");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const createContext = async (options)=>{
    const datasource = _datasource.MBDataSource;
    if (!datasource.isInitialized) {
        await datasource.initialize();
    }
    const authorization = options.req.headers.authorization;
    const accessToken = authorization?.match(/Bearer (.+)/)?.[1];
    try {
        if (!accessToken) {
            throw new Error('token does not exist');
        }
        const token = _jsonwebtoken.default.verify(accessToken, process.env.GOTRUE_JWT_SECRET);
        if (token.role === 'revenuecat_admin') {
            return {
                datasource,
                // @ts-ignore
                userAuthClient: null,
                jwt: {
                    ...token,
                    accessToken
                }
            };
        } else {
            const userAuthClient = (0, _auth.createUserAuthClient)(accessToken);
            return {
                datasource,
                userAuthClient,
                jwt: token
            };
        }
    } catch (error) {
        return {
            datasource
        };
    }
};
const _default = createContext;

//# sourceMappingURL=context.js.map