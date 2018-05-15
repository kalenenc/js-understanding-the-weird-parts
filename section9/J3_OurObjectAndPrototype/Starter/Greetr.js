(function(global, $) {

  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  Greetr.prototype = {}; // inside it, methods that I want to use inside my object that's returned from Greetr

  Greetr.init = function(firstname, lastname, language) { // okay to call after because it won't be called, because of the creation phase

    var self = this; // so we don't have to worry about what 'this' points to later

    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";

  }

  Greetr.init.prototype = Greetr.prototype; // basically, we just want a cleaner syntax so we can type Greetr.prototype instead of Greetr.init.prototype each time... they will reference the same memory space
  // any objects created with Greetr.init should actually point to Greetr.prototype for the prototype chain


  global.Greetr = global.G$ = Greetr;



}(window, jQuery));
