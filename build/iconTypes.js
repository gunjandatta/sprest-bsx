"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_bs_1 = require("gd-sprest-bs");
// Ensure the Icon Types reference exists
if (gd_sprest_bs_1.IconTypes == null) {
    // Update it to the global variable
    console.log("[Dev] The icon types variable is null. Defaulting to the global variable.");
    gd_sprest_bs_1.IconTypes = window["GD"] && window["GD"].IconTypes;
}
// This will ensure the export occurs at the end of the compiled file
exports.default = gd_sprest_bs_1.IconTypes;