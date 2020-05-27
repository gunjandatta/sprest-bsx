// Export the react components
export * from "./components";
debugger;

// Update the global variable
import * as SPComponents from "./components";
window["GD"] = { ...window["GD"], ...SPComponents };