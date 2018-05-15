function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === "en") {
      console.log('hello ' + firstname + " " + lastname);
    }
    if (language === "es") {
      console.log('hola ' + firstname + " " + lastname);
    }
  }
}

// even though it's pointing to the same function, they were made during two different execution contexts (a function was called) and points to a different place in memory
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('kalene', 'csefalvay');
greetSpanish('sean', 'merritt');
