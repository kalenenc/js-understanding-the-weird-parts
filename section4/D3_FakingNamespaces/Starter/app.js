var greet = 'Hello!';
var greet = 'Hola!';  //pretend for instance this is coming from another JS file

console.log(greet);

var english = {};
var spanish = {};

english.greet = "Hello!";
spanish.greet = "Hola!";

english.greetings = {} // you have to set it to an empty object first or else it would try to add the greety property to undefined

//or even better yet, using object literal notation...
var english = {
  greetings: {
    greet : "Hello!"
  }
};

english.greetings.greet = "Hello!";

// basically, english and spanish have become a container to make sure there's not variable collision

console.log(english);
