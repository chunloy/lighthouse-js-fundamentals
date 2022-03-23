/*const sayHello = function () {
  console.log("Hello, world");
  console.log("This is an anonymous function.");
}
*/

//----------------------------------------------

/*
const sayHello = function (name) {
  console.log("Hello, " + name)
}
sayHello("world");
sayHello("everybody");
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
*/

//----------------------------------------------

/*
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 
*/

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);