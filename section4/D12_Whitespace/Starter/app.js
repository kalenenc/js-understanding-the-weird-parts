// function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('Kalene'); // Hello Kalene

// function expression, not put into memory initially, but rather during execution
// almost like a function literal (making it on the fly)
var greetFunc = function(name) {
  console.log('Hello ' + name)
}
greetFunc('Kalene'); // Hello Kalene

var greeting = function(name) {
  console.log('Hello ' + name)
}('Kalene'); // Hello Kalene

// functions are objects, and to invoke it, you just put parentheses

// this also works with function statements...

function greet(name) {
  console.log('Hello ' + name);
}('Kalene') // Hello Kalene

var greeting = function(name) {
  return 'Hello ' + name;
};

console.log(greeting);
