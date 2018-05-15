window.libraryName = window.libraryName ||  "Lib 2";


//think of this expression like this (b/c of || having a higher precedence than =): 

  //window.libraryName = (window.libraryName || "Lib 2")

//this is basically like saying if libraryName exists and isn't undefined, it's true and it short circuits and window.libraryName is set to what it already is

//if window.libraryName is undefined, Lib2 is already true and so window.libraryName is then set to Lib 2
