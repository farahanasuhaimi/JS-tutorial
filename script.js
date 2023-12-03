const variableName = "Welcome to Variables!";
console.log(variableName);

let variableName1 = "Welcome to Variables! Again!";
console.log(variableName1);

const wholeNumber = 10.1;
console.log(typeof wholeNumber);

const person = {
  name: "John",
  age: 30,
};

console.log(typeof person);
console.log(typeof person.name);

const age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}

// Truthy  and Falsy values
if (false || 0 || "" || null || undefined || NaN) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

// List all falsy values
falsy = [false, 0, "", null, undefined, NaN];

// Functions
function greet(name) {
  return `Hello ${name} !`;
}

const greeting = greet("John");
console.log(greeting);

// Logical operators - It always returns the first value that matches the condition
console.log("true && true :", true && true); // true
console.log("true && false :", true && false); // false
console.log("false && false :", false && false); // false

console.log("true && 1 :", true && 1); // 1
console.log("true && null :", true && null); // null
console.log("false && 0 :", false && 0); // false

// Ternary Operator
// Base on line 18 to 23
age >= 18
  ? console.log("You are an adult")
  : console.log("You are not an adult");

// For loop
// for ([initialExpression]; [condition]; [+-Expression]) {
// code
// }
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
