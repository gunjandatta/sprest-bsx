// Export the $REST component
import $REST from "./rest";
export { $REST }

// Export the js components
import Components from "./lib";
export { Components }

// Export the react components
export * from "./components";

// Update the global variable
import * as SPComponents from "./components";
window["GD"] = { ...window["GD"], ...SPComponents };