function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked');
}

var john = new Person('John', 'Doe');
// console.log(john);
// Person {}
// Person {
//   firstname: 'John',
//   lastname: 'Doe'
// }
// This function is invoked

var jane = new Person('Jane', 'Doe');
console.log(jane);
// console.log(jane);
// Person {}
// Person {
//   firstname: 'Jane',
//   lastname: 'Doe'
// }
// This function is invoked

// When using a function constrctor, JS automatically sets the prototype for you

console.log(john.__proto__) // Person {}

// The following syntax is a way to add properties and methods to a

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

// Both Jane and John's __proto__ is Person.prototype, and therefore have access to the getFullName method because Person.prototype is the prototype

console.log(john.getFullName()); // 'John Doe'

// You can add more methods to the prototype on the fly

Person.prototype.getFormalFullName = function() {
  return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName()); // 'Doe, John'

// It's searching it's prototype, which is Person.prototype, where the method is found
