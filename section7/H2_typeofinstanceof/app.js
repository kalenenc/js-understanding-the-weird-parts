var a = 3;
console.log(typeof a); // number (not Number which is the result of a function constructor)

var b = "Hello";
console.log(typeof b); //string

var c = {};
console.log(typeof c); //object

var d = [];
console.log(typeof d); // weird! (object)
console.log(Object.prototype.toString.call(d)); // better! [object Array]
    // call - invoke the function, but state what the 'this' variable should be
    // basically you are coersing the array to be a string

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // object
console.log(e instanceof Person); // true (because e is an instance of Person down the prototype chain)

console.log(typeof undefined); // makes sense (undefined)
console.log(typeof null); // a bug since, like, forever...
                          // returns an object

var z = function() { };
console.log(typeof z); // function
  // you can check because functions are objects in JS
