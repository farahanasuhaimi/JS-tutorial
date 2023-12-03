// Functions is a sub program to perform some task
// 1. function declaration and
function sayHello(name) {
  console.log(`Hello ${name}!`);
}

// 2. function call
sayHello("John");

// -----------------------------
function name(params) {
  // statements
  // have access to 'this' keyword
}

// 3. function expression
const name2 = function (params) {
  // statements
};

// 4. Arrow function is a shorter syntax for a function expression
const name3 = (params) => {
  //statements
};

// eg.1 Arrow function with one parameter
const sayHi = (name) => {
  console.log(`Hi ${name}!`);
};

sayHi("John");

// video function return
