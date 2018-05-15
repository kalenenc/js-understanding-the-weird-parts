function greet(firstName, lastName, language) {

  language = language || 'en'; // way to set our default

  if (arguments.length < 0) {
      console.log('missing parameters');
      return;
   }

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log('-----')
}

greet();
greet('Kalene');
