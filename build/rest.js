"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_bs_1 = require("gd-sprest-bs");
// Ensure the Components reference exists
if (gd_sprest_bs_1.$REST == null) {
    // Update it to the global variable
    console.log("[SP-Dev] The $REST variable is null. Defaulting to the global variable.");
    gd_sprest_bs_1.$REST = window["$REST"];
}
// This will ensure the export occurs at the end of the compiled file
exports.default = gd_sprest_bs_1.$REST;
