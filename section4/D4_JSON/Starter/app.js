var objectLiteral = {
  name: "Kalene",
  isAProgrammer: true
};

console.log(objectLiteral); //valid object literal notation

console.log(JSON.stringify(objectLiteral)); //converts to a JSON string

var jsonValue = JSON.parse('{ "name": "Kalene", "isAProgrammer": true }'); //converts to a JS object literal object

console.log(jsonValue);
