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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("gd-bsx/build/components"));
var base_1 = require("gd-bsx/build/base");
var lib_1 = require("./lib");
// Date Time
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    DateTime.prototype.onRender = function (props) { lib_1.default.DateTime(props); };
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
    Field.prototype.onRender = function (props) { lib_1.default.Field(props); };
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
    ListFormDisplay.prototype.onRender = function (props) { lib_1.default.ListForm.renderDisplayForm(props); };
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
    ListFormEdit.prototype.onRender = function (props) { lib_1.default.ListForm.renderEditForm(props); };
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
    ListFormDialog.prototype.onRender = function (props) { lib_1.default.ListFormDialog(props); };
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
    PeoplePicker.prototype.onRender = function (props) { lib_1.default.PeoplePicker(props); };
    return PeoplePicker;
}(base_1.Base));
exports.PeoplePicker = PeoplePicker;
