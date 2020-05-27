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
Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_bs_1 = require("gd-sprest-bs");
// Ensure the Components reference exists
if (gd_sprest_bs_1.Components == null) {
    // Update it to the global variable
    console.log("[Dev] The components variable is null. Defaulting to the global variable.");
    gd_sprest_bs_1.Components = __assign(__assign({}, (window["$REST"] && window["$REST"].Components)), (window["GD"] && window["GD"].Components));
}
// This will ensure the export occurs at the end of the compiled file
exports.default = gd_sprest_bs_1.Components;
