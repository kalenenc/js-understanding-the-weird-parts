function sayHiLater() {
  var greeting = "Hi!";

  setTimeout(function(){
    console.log(greeting);
  }, 3000)
}

sayHiLater(); // will log "Hi!" 3 seconds after being invoked

// setTimeout takes a function object (first class function)
// we're creating an object on the fly, so taking advantage of function expressions
// setTimeout is an example of a closure
  // sayHiLater is called... the function passed as a parameter inside the setTimeout is called asynchronously 3 seconds later and is run
  // the function expression has access to greeting because even though sayHiLater() has finished running, greeting still exists in memory (a closure was created)

// jQuery Example

$('button').click(function(){

});

// jquery uses function expressions and first class functions
// click is a function and we pass a function expression as parameter to set up what we want to happen when something is clicked (an example of a first class function)

// ----- callback -----

function tellMeWhenDone(callback) {
  var a = 1000; //some work
  var b = 2000; // some work

  callback(); // the 'callback'-- it runs the function i give it!
}

tellMeWhenDone(function(){
  console.log('I am done!');
})

tellMeWhenDone(function(){
  console.log('I am also done!');
});
