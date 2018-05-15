var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// don't do this ever!!! for demo purposes only
john.__proto__ = person;

for (var prop in john) {
  console.log(prop + ': ' + john[prop]);
}

//"firstname: John"
//"lastname: Doe"
//"getFullName: function () {
//    return this.firstname + ' ' + this.lastname;
// }"

// JS automatically reached out and got each property and method on the object and the object's prototype

// If you just  want the object itself:

for (var prop in john) {
  if (john.hasOwnProperty(prop)) { // Method available on the base object
    console.log(prop + ': ' + john[prop]);
  }
}

//"firstname: John"
//"lastname: Doe"

var jane = {
  address: '111 Main St.',
  getFormalFullName: function() {
    return this.lastname + ', ' + this.firstname;
  }
}

var jim = {
  getFirstName: function() {
    return firstname; // Note: NOT this.firstname... Not sure if mistake in video or not
  }
}

// Takes all properties and methods of jane and jim and adds them directly to john
_.extend(john, jane, jim);
console.log(john);

// Object {
//   address: '111 Main St.',
//   firstname: 'John',
//   getFirstName: function () {...},
//   getFormalFullName: function() {...},
//   lastname: 'Doe'
// }

// It just combined all the methods and placed them on john
// Could even pull out that extend function from underscore and include it in your own library
