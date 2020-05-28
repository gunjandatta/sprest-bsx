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
// Export the $REST component
var rest_1 = require("./rest");
exports.$REST = rest_1.default;
// Export the js components
var lib_1 = require("./lib");
exports.Components = lib_1.default;
// Export the icons
var gd_bsx_1 = require("gd-bsx");
exports.Icons = gd_bsx_1.Icons;
exports.IconTypes = gd_bsx_1.IconTypes;
// Export the react components
__export(require("./components"));
// Update the global variable
var SPComponents = require("./components");
window["GD"] = __assign(__assign({}, window["GD"]), SPComponents);
