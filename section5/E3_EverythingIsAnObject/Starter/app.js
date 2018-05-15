var a = {};
var b = function() {};
var c = [];

console.log(a.__proto__); // Object {}

// The base object is returned (very bottom to prototype chain)
// Have different properties and methods (toString, valueOf, isProptertyOf)

console.log(b.__proto__); // function Empty() {}

// Empty function object that's the prototype of all functions
// Other properties and methods available, including apply(), bind(), call()

console.log(c.__proto__); // []

// Some type of empty array
// Have different properties and methods again, including length, indexOf, pop, push, etc.
// JS engine sets prototype to built-in base prototype object that has these methods on them

console.log(c.__proto__.__proto__); // Object {}
console.log(b.__proto__.__proto__); // Object {}
