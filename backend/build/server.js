"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fastifyServer", {
    enumerable: true,
    get: function() {
        return fastifyServer;
    }
});
require("dotenv/config");
require("reflect-metadata");
const _fastify = require("@trpc/server/adapters/fastify");
const _cors = /*#__PURE__*/ _interop_require_default(require("@fastify/cors"));
const _fastify1 = /*#__PURE__*/ _interop_require_default(require("fastify"));
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
const _context = /*#__PURE__*/ _interop_require_default(require("./context"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const fastifyServer = (0, _fastify1.default)({
    maxParamLength: 5000
});
fastifyServer.register(_cors.default, {
    origin: (origin, callback)=>{
        // if (!origin) return callback(null, true)
        return callback(null, true);
    }
});
fastifyServer.register(_fastify.fastifyTRPCPlugin, {
    trpcOptions: {
        router: _app.default,
        createContext: _context.default,
        onError: ({ error })=>{
            //^?
            console.log(error);
        }
    }
});

//# sourceMappingURL=server.js.map