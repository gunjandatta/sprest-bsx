"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_bs_1 = require("gd-sprest-bs");
var base_1 = require("gd-bsx/build/base");
// Date Time
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    DateTime.prototype.onRender = function (props) { gd_sprest_bs_1.Components.DateTime(props); };
    return DateTime;
}(base_1.Base));
exports.DateTime = DateTime;
// Field
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Field.prototype.onRender = function (props) { gd_sprest_bs_1.Components.Field(props); };
    return Field;
}(base_1.Base));
exports.Field = Field;
// List Form - Display
var ListFormDisplay = /** @class */ (function (_super) {
    __extends(ListFormDisplay, _super);
    function ListFormDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    ListFormDisplay.prototype.onRender = function (props) { gd_sprest_bs_1.Components.ListForm.renderDisplayForm(props); };
    return ListFormDisplay;
}(base_1.Base));
exports.ListFormDisplay = ListFormDisplay;
// List Form - Edit
var ListFormEdit = /** @class */ (function (_super) {
    __extends(ListFormEdit, _super);
    function ListFormEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    ListFormEdit.prototype.onRender = function (props) { gd_sprest_bs_1.Components.ListForm.renderEditForm(props); };
    return ListFormEdit;
}(base_1.Base));
exports.ListFormEdit = ListFormEdit;
// List Form Dialog
var ListFormDialog = /** @class */ (function (_super) {
    __extends(ListFormDialog, _super);
    function ListFormDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    ListFormDialog.prototype.onRender = function (props) { gd_sprest_bs_1.Components.ListFormDialog(props); };
    return ListFormDialog;
}(base_1.Base));
exports.ListFormDialog = ListFormDialog;
// People Picker
var PeoplePicker = /** @class */ (function (_super) {
    __extends(PeoplePicker, _super);
    function PeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    PeoplePicker.prototype.onRender = function (props) { gd_sprest_bs_1.Components.PeoplePicker(props); };
    return PeoplePicker;
}(base_1.Base));
exports.PeoplePicker = PeoplePicker;
