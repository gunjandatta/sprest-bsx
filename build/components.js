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
var base_1 = require("./base");
var lib_1 = require("./lib");
// Accordion
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Accordion.prototype.onRender = function (props) { lib_1.default.Accordion(props); };
    return Accordion;
}(base_1.Base));
exports.Accordion = Accordion;
// Alert
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Alert.prototype.onRender = function (props) { lib_1.default.Alert(props); };
    return Alert;
}(base_1.Base));
exports.Alert = Alert;
// Badge
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Badge.prototype.onRender = function (props) { lib_1.default.Badge(props); };
    return Badge;
}(base_1.Base));
exports.Badge = Badge;
// Button
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Button.prototype.onRender = function (props) { lib_1.default.Button(props); };
    return Button;
}(base_1.Base));
exports.Button = Button;
// ButtonGroup
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    ButtonGroup.prototype.onRender = function (props) { lib_1.default.ButtonGroup(props); };
    return ButtonGroup;
}(base_1.Base));
exports.ButtonGroup = ButtonGroup;
// Card
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Card.prototype.onRender = function (props) { lib_1.default.Card(props); };
    return Card;
}(base_1.Base));
exports.Card = Card;
// CardGroup
var CardGroup = /** @class */ (function (_super) {
    __extends(CardGroup, _super);
    function CardGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    CardGroup.prototype.onRender = function (props) { lib_1.default.CardGroup(props); };
    return CardGroup;
}(base_1.Base));
exports.CardGroup = CardGroup;
// Carousel
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Carousel.prototype.onRender = function (props) { lib_1.default.Carousel(props); };
    return Carousel;
}(base_1.Base));
exports.Carousel = Carousel;
// Checkbox Group
var CheckboxGroup = /** @class */ (function (_super) {
    __extends(CheckboxGroup, _super);
    function CheckboxGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    CheckboxGroup.prototype.onRender = function (props) { lib_1.default.CheckboxGroup(props); };
    return CheckboxGroup;
}(base_1.Base));
exports.CheckboxGroup = CheckboxGroup;
// Collapse
var Collapse = /** @class */ (function (_super) {
    __extends(Collapse, _super);
    function Collapse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Collapse.prototype.onRender = function (props) { lib_1.default.Collapse(props); };
    return Collapse;
}(base_1.Base));
exports.Collapse = Collapse;
// Dropdown
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Dropdown.prototype.onRender = function (props) { lib_1.default.Dropdown(props); };
    return Dropdown;
}(base_1.Base));
exports.Dropdown = Dropdown;
// Form
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Form.prototype.onRender = function (props) { lib_1.default.Form(props); };
    return Form;
}(base_1.Base));
exports.Form = Form;
// Form Control
var FormControl = /** @class */ (function (_super) {
    __extends(FormControl, _super);
    function FormControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    FormControl.prototype.onRender = function (props) { lib_1.default.FormControl(props); };
    return FormControl;
}(base_1.Base));
exports.FormControl = FormControl;
// Input Group
var InputGroup = /** @class */ (function (_super) {
    __extends(InputGroup, _super);
    function InputGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    InputGroup.prototype.onRender = function (props) { lib_1.default.InputGroup(props); };
    return InputGroup;
}(base_1.Base));
exports.InputGroup = InputGroup;
// Jumbotron
var Jumbotron = /** @class */ (function (_super) {
    __extends(Jumbotron, _super);
    function Jumbotron() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Jumbotron.prototype.onRender = function (props) { lib_1.default.Jumbotron(props); };
    return Jumbotron;
}(base_1.Base));
exports.Jumbotron = Jumbotron;
// ListBox
var ListBox = /** @class */ (function (_super) {
    __extends(ListBox, _super);
    function ListBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    ListBox.prototype.onRender = function (props) { lib_1.default.ListBox(props); };
    return ListBox;
}(base_1.Base));
exports.ListBox = ListBox;
// ListGroup
var ListGroup = /** @class */ (function (_super) {
    __extends(ListGroup, _super);
    function ListGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    ListGroup.prototype.onRender = function (props) { lib_1.default.ListGroup(props); };
    return ListGroup;
}(base_1.Base));
exports.ListGroup = ListGroup;
// Media
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Media.prototype.onRender = function (props) { lib_1.default.Media(props); };
    return Media;
}(base_1.Base));
exports.Media = Media;
// Media List
var MediaList = /** @class */ (function (_super) {
    __extends(MediaList, _super);
    function MediaList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    MediaList.prototype.onRender = function (props) { lib_1.default.MediaList(props); };
    return MediaList;
}(base_1.Base));
exports.MediaList = MediaList;
// Modal
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Modal.prototype.onRender = function (props) { lib_1.default.Modal(props); };
    return Modal;
}(base_1.Base));
exports.Modal = Modal;
// Nav
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Nav.prototype.onRender = function (props) { lib_1.default.Nav(props); };
    return Nav;
}(base_1.Base));
exports.Nav = Nav;
// Navbar
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Navbar.prototype.onRender = function (props) { lib_1.default.Navbar(props); };
    return Navbar;
}(base_1.Base));
exports.Navbar = Navbar;
// Pagination
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Pagination.prototype.onRender = function (props) { lib_1.default.Pagination(props); };
    return Pagination;
}(base_1.Base));
exports.Pagination = Pagination;
// Panel
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Panel.prototype.onRender = function (props) { lib_1.default.Panel(props); };
    return Panel;
}(base_1.Base));
exports.Panel = Panel;
// Popover
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Popover.prototype.onRender = function (props) { lib_1.default.Popover(props); };
    return Popover;
}(base_1.Base));
exports.Popover = Popover;
// Progress
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Progress.prototype.onRender = function (props) { lib_1.default.Progress(props); };
    return Progress;
}(base_1.Base));
exports.Progress = Progress;
// Spinner
var Spinner = /** @class */ (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Spinner.prototype.onRender = function (props) { lib_1.default.Spinner(props); };
    return Spinner;
}(base_1.Base));
exports.Spinner = Spinner;
// Table
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Table.prototype.onRender = function (props) { lib_1.default.Table(props); };
    return Table;
}(base_1.Base));
exports.Table = Table;
// Toolbar
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Toolbar.prototype.onRender = function (props) { lib_1.default.Toolbar(props); };
    return Toolbar;
}(base_1.Base));
exports.Toolbar = Toolbar;
// Tooltip
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render the bootstrap component
    Tooltip.prototype.onRender = function (props) { lib_1.default.Tooltip(props); };
    return Tooltip;
}(base_1.Base));
exports.Tooltip = Tooltip;
