"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Export the $REST library
var gd_sprest_bs_1 = require("gd-sprest-bs");
exports.$REST = gd_sprest_bs_1.$REST;
// Export the bootstrap react library
__export(require("gd-bsx"));
// Export the react SharePoint components
__export(require("./components"));
// Update the global variable
var Components = require("./components");
window["GD"] = __assign(__assign({}, window["GD"]), Components);
