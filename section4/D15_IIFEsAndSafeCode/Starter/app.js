// IIFE
var firstname = 'John';

(function(name) {

    var greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(firstname)); // IIFE

console.log(greeting); // Hola
