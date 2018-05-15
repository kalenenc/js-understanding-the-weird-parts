var person = new Object();

person["firstName"] = "Kalene"; // the person object now has access to the firstName property in memory
//this is a primitive (string) so it's a property

// computed member access = []

person["lastName"] = "Csefalvay";

var firstNameProperty = "firstName";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "123 Main Street";
person.address.city = "Pittsburgh";
person.address.state = "Pennsylvania";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);
