var arr = [
  1,
  false,
  {
    name: "Kalene",
    address: "111 Main Street"
  },
  //this function is an expression because it's inside of the  array declaration
  function(name) {
    var greeting = "Hello ";
    console.log(greeting + name);
  },
  "hello"

];

console.log(arr); // (5) [1, false, {…}, ƒ, "hello"]
arr[3](arr[2].name); // Hello Kalene
