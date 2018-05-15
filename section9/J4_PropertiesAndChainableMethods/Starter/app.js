var g = G$('John', 'Doe');
g.greet().setLang('es').greet('string'); // chainable, and second greet will be coerced to true and then will log a formal greeting to the console

console.log('-----');

g.setLang('fr').greet(true); // uncaught Invalid Language
