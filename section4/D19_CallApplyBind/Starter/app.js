var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
}

var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + " " + lang2);
  console.log('-----')
}

var logPersonName = logName.bind(person);


//logPersonName('en', 'es'); // Logged: John Doe

// ------- call() -------

//logName.call(person, 'en', 'es');

// ------- apply() -------

logName.apply(person, ['en', 'es']);

// ------- function borrowing -------

var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}

console.log(person.getFullName.apply(person2)); // Jane Doe

// ------- function currying -------

function multiply(a,b) {
  return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
var multiplyByThree = multiply.bind(this, 3);

multiplyByTwo(4); // 8

// since bind is creating a copy why do we pass parameters?

// passing parameters sets the permanent values of the parameters when the copy is made
  // so basically, the first parameter (variable a) will always be a 2 in the copy of this function

// the same thing as doing:

function multiplyByTwoExample(a, b) {
  a = 2;
  return a * b;
}

multiplyByTwo(4); // 8
