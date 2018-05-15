function Person() {
  console.log(this);
  this.firstname = 'John';
  this.lastname = 'Doe';
  console.log('This function is invoked');
}

var john = new Person();
console.log(john);
// Person {}
// This function is invoked
// Object {
//    firstname: 'John',
//    lastname: 'Doe'
//}

// Function was invoked and an object  was returned

function Person() {
  console.log(this);
  this.firstname = 'John';
  this.lastname = 'Doe';
  console.log('This function is invoked');

  return {greeting: 'I got in the way'};
}

var john = new Person();
console.log(john);

// Person {}
// This function is invoked.
// Object {greeting: 'I got in the way'}

// If you return something, it gets in the way of the JS engine's process of automatically returning the object
// If you don't return anything, the JS engine gives back the object that was set as the 'this' variable before the function started executing

function Person() {
  console.log(this);
  this.firstname = 'John';
  this.lastname = 'Doe';
  console.log('This function is invoked');
}

var jane = new Person();
console.log(jane);
// Person {}
// This function is invoked
// Object {
//    firstname: 'John',
//    lastname: 'Doe'
//}

// Set parameters!

function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked');
}

var john = new Person('John', 'Doe');
console.log(john);
// Person {}
// This function is invoked
// Object {
//    firstname: 'John',
//    lastname: 'Doe'
//}


var jane = new Person('Jane', 'Doe');
console.log(jane);
// Person {}
// This function is invoked
// Object {
//    firstname: 'Jane',
//    lastname: 'Doe'
//}
