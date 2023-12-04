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

// eg.1 Arrow function with one parameter - do not need parenthesis
// const functionName = params => Expression; 
const sayHi = name => console.log(`Hi ${name}!`);
sayHi("John");

const addNumbers = num2 => console.log(num2 + 2);
addNumbers(2);

// eg.2 Arrow function with two parameters - need parenthesis
const sayIntro = (name = 'Derek', age = 25) => console.log(`Hi, I am ${name}, I am ${age} years old!`);
sayIntro("John", 20);
sayIntro();