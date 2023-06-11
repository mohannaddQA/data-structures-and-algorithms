"use strict";

function reverseArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - i - 1];
  }
  return newArr;
}
function sayHello() {
  console.log("Hello!");
  return "hi!";
}

// Calling the function
sayHello(); // Outputs: "Hello!"
console.log(typeof sayHello());

// Referencing the function
const greet = sayHello;
console.log(typeof greet); // Outputs: "function"
console.log(typeof sayHello);

// Invoking the referenced function
greet(); // Outputs: "Hello!"
