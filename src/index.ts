// Export the $REST library
import { $REST } from "gd-sprest-bs";
export { $REST }

// Export the bootstrap react library
export * from "gd-bsx";

// Export the react SharePoint components
export * from "./components";

// Update the global variable
import * as Components from "./components";
window["GD"] = { ...window["GD"], ...Components };