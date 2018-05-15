function mapForEach(arr, fn) {

  var newArray = [];
  for(var i=0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i]) // where functional programming comes in
    )
  }
  return newArray;
}

var arr1 = [1, 2, 3];

var arr2 = mapForEach(arr1, function(item){
  return item * 2;
})

console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
  return item > 2;
})

console.log(arr3); // [false, false, true]

var checkPastLimit = function(limiter, item) {
  return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2));
console.log(arr4); // [false, false, true]

var checkPastLimitSimplified = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter)
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));

console.log(arr5); // [false, true, true]

// ---------------------------------------------

var arr1 = [1, 2, 3];

console.log(arr1); // [1, 2, 3]

var arr2 = [];
for(var i=0; i < arr1.length; i++) {

  arr2.push(arr[i] * 2);

}

console.log(2); // [2, 4, 6]












// ------------------ My cheesy example ------------------

// take a string, and return back the same string but with a specified letter
function takeString(str, fn) {
  return fn(str);
}

var returnAs = takeString('Kalene is my Name', function(str){
  var cleanStr = [];
  for (var i =0; i < str.length; i++) {
    if ( (str[i] === "a") || (str[i] === "A") ) {
      cleanStr.push(str[i]);
    }
  }
  var newStr = cleanStr.join('');
  return newStr;
})

//console.log(returnAs);

var returnBs = takeString('Berry berry nice to meet you, Bee', function(str){
  var tempArr = [];
  for (var i =0; i < str.length; i++) {
    if ( (str[i] === " ") || (str[i] === 'b') || (str[i] === "B") ) {
      tempArr.push(str[i]);
    }
    else {
      tempArr.push("_");
    }
  }
  return tempArr.join('');

})

console.log(returnBs);
