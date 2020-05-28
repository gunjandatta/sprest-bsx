// Export the react components
export * from "./components";
export * from "./sp-components";

// Export the components
import Components from "./lib";
export { Components }

// Export the icons
import Icons from "./icons";
export { Icons }

// Export the icon types
import IconTypes from "./iconTypes";
export { IconTypes }

// Export the $REST library
import $REST from "./rest";
export { $REST }

// Update the global variable
import * as BSComponents from "./components";
import * as SPComponents from "./sp-components";
window["GD"] = { ...window["GD"], ...BSComponents, ...SPComponents };