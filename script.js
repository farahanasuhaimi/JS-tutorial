const variableName = 'Welcome to Variables!';
console.log(variableName);

let variableName1 = 'Welcome to Variables! Again!';
console.log(variableName1);

const wholeNumber = 10.10;
console.log(typeof wholeNumber);

const person = {
  name: 'John',
  age: 30
}

console.log(typeof person);
console.log(typeof person.name);

const age  = 18;
if (age >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are not an adult');
}

// Truthy  and Falsy values 
if ((false || 0 || '' || null || undefined || NaN) ) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

// List all falsy values
falsy = [false, 0, '', null, undefined, NaN];

// Functions
function greet(name) {
  return `Hello ${name} !`;
}

const greeting = greet('John');
console.log(greeting);