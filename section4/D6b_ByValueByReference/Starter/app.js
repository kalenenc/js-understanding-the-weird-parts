// by value (primitive)
var a = 3;
var b;

b = a; // a new copy is made in memory for b's value

a = 2; // you can change a and it won't be affected because they occupy two different places in memory

console.log(a); // 2
console.log(b); // 3

// by reference (all objects (including functions))
var c = {greeting: "hi"};
var d;

d = c; //pointing to the same memory space

c.greeting = "Hello"; // mutate

console.log(c); // {greeting: "Hello"}
console.log(d); // {greeting: "Hello"}

// because they reference the same space in memory, changing one will change the other

// by reference (even as parameters)

function changeGreeting(obj) {
  obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c); // Hola
console.log(d); // Hola

// because they're being passed by reference again (the same object in memory)

// equals operator sets up new memory space (new address)

c = { greeting: "howdy" }; // sets up a brand new memory space for c and put it's new value in it

// cd and d will no longer be pointing to the same place in memory

console.log(c); // { greeting: "howdy" }
console.log(d); // { greeting: "Hola" }
