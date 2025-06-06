console.log("Hello");   `// This is a simple Node.js script that prints "Hello" to the console.`

// module wrappers

console.log(__filename);
console.log(__dirname);

//Modules --it is a way to pass our code from one file to another file

const greet = require("./greet");
console.log(greet); // This will print the value exported from greet.js

const {greet2, greet3, greet4} = require("./greet");
console.log(greet2); // This will print the value of greet2 exported from greet.js
console.log(greet3); // This will print the value of greet3 exported from greet.js
console.log(greet4); // This will print the value of greet4 exported from greet.js

// import greet5 from "./greet.js";
// console.log(greet5); // This will print the value of greet5 exported from greet.jso



//path module
import path from "path";
console.log(path.basename(__filename)); // This will print the0 base name of the current file