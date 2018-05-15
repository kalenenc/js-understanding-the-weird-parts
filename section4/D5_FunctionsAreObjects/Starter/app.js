function greet() {
  console.log('hi');
}

greet.language = "English";

console.log(greet);
// will literally just log the following:
  //  function greet() {
  //    console.log('hi');
  //  }

console.log(greet.language); // English
