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
const _trpc = require("../../trpc");
const _sampleroute = /*#__PURE__*/ _interop_require_default(require("./sample/sample.route"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const userRoutes = (0, _trpc.mergeRouters)(_sampleroute.default);
const _default = userRoutes;

//# sourceMappingURL=index.js.map