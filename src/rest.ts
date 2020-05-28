import { $REST } from "gd-sprest-bs";

// Ensure the Components reference exists
if ($REST == null) {
    // Update it to the global variable
    console.log("[SP-Dev] The $REST variable is null. Defaulting to the global variable.");
    ($REST as any) = window["$REST"];
}

// This will ensure the export occurs at the end of the compiled file
export default $REST;