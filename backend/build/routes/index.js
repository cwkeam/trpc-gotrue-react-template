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
const _trpc = require("../trpc");
const _user = /*#__PURE__*/ _interop_require_default(require("./user"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const routes = (0, _trpc.router)({
    user: _user.default,
    test: (0, _trpc.router)({
        testRoute: _trpc.publicProcedure.input(_zod.z.undefined()).query(async ({ ctx: { datasource, jwt } })=>{
            return 'happy';
        })
    })
});
const _default = routes;

//# sourceMappingURL=index.js.map