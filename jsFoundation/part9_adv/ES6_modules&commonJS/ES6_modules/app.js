// Module Import File

// default import
import multiply from "./mathOperationsM.js";

// named import
import { add, subtract } from "./mathOperationsM.js";

// import multiply, { add, subtract } from "./mathOperationsM.js";

console.log(multiply(2, 4));
console.log(subtract(9, 3));

// The default export (multiply) can be given any name in the importing file, while named exports (add, subtract) need to keep the same name unless you use as to alias them.
