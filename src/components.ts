export * from "gd-bsx/build/components";
import { Base } from "gd-bsx/build/base";
import Components from "./lib";

// Date Time
export class DateTime extends Base<Components.IDateTimeProps> {
    // Render the bootstrap component
    onRender(props) { Components.DateTime(props); }
}

// Field
export class Field extends Base<Components.IFieldProps> {
    // Render the bootstrap component
    onRender(props) { Components.Field(props); }
}

// List Form - Display
export class ListFormDisplay extends Base<Components.IListFormDisplayProps> {
    // Render the bootstrap component
    onRender(props) { Components.ListForm.renderDisplayForm(props); }
}

// List Form - Edit
export class ListFormEdit extends Base<Components.IListFormEditProps> {
    // Render the bootstrap component
    onRender(props) { Components.ListForm.renderEditForm(props); }
}

// List Form Dialog
export class ListFormDialog extends Base<Components.IListFormDialogProps> {
    // Render the bootstrap component
    onRender(props) { Components.ListFormDialog(props); }
}

// People Picker
export class PeoplePicker extends Base<Components.IPeoplePickerProps> {
    // Render the bootstrap component
    onRender(props) { Components.PeoplePicker(props); }
}