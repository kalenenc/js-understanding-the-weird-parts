function a() {
  console.log(this);
  this.newVariable = "hello";
}

var b = function() {
  console.log(this);
}

a(); // Window Object
b(); // Window Object

console.log(newVariable);

// ---

var c = {
  name: 'The c object',
  log: function() { // a function expression
    this.name = 'updated C object';
    console.log(this);

    var setName = function(newName) {
      this.name = newName;
    };

    setName('Updated again! The c object'); // this is so goofy, but the window object was 'this' and therefore, window.name is set equal to 'Updated again! The c object'
    console.log(this);
  }
}

// when a function is actually a method attached to an object, 'this' becomes the object that that method is sitting inside of


c.log();
// {name: "updated C object", log: ƒ}
// {name: "updated C object", log: ƒ}

// ----- A workaround... -----

var c = {
  name: 'The c object',
  log: function() {
    var self = this; //this is an object, so self is pointing to the same reference in memory as 'this'

    // and then we use self everywhere we would have normally used 'this'

    self.name = 'updated C object';
    console.log(self);

    var setName = function(newName) {
      self.name = newName;
    };

    setName('Updated again! The c object');
    console.log(self);
  }
}

c.log();

// {name: "updated C object", log: ƒ}
// {name: "Updated again! The c object", log: ƒ}
