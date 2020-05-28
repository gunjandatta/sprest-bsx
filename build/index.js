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
// Export the react components
__export(require("./components"));
__export(require("./sp-components"));
// Export the components
var lib_1 = require("./lib");
exports.Components = lib_1.default;
// Export the icons
var icons_1 = require("./icons");
exports.Icons = icons_1.default;
// Export the icon types
var iconTypes_1 = require("./iconTypes");
exports.IconTypes = iconTypes_1.default;
// Export the $REST library
var rest_1 = require("./rest");
exports.$REST = rest_1.default;
// Update the global variable
var BSComponents = require("./components");
var SPComponents = require("./sp-components");
window["GD"] = __assign(__assign(__assign({}, window["GD"]), BSComponents), SPComponents);
