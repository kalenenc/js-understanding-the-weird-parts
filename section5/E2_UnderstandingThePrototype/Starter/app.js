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

// don't do this ever!!!! for demo purposes only
john.__proto__ = person;
console.log(john.getFullName()); // John Doe

// JS is smart enough to know that 'this' is originally referring to 'John', not 'Default'

console.log(john.firstname); // John

// First looks for the object itself, John, and if it finds it, doesn't search the protype chain any further

var jane = {
  firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName()); // Jane Default

// It finds the firstname property on Jane, and then moves down the prototype chain to look for lastname... finds it on person, and it's 'Default'
