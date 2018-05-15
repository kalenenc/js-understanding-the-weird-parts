var Kalene = {
  firstName: "Kalene",
  lastName: "Csefalvay",
  address: {
    street: "123 Main Street",
    city: "Pittsburgh",
    state: "Pennsylvania"
  }
};

function greet(person) {
  console.log('Hi, ' + person.firstName);
}

greet(Kalene); // "Hi, Kalene"

greet({ firstName: "Mary", lastName: "Doe" }) //Hi, Mary

Kalene.address2 = {
  street: "111 Marsh St"
}

//same thing as writing the following:
// var person = new Object();
// person.firstName = "Kalene";
// person.lastName = "Csefalvay";
