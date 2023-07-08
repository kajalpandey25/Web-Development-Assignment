// What is the purpose of the spread operator (...) in ES6?

// The spread operator, denoted by three dots (...) in JavaScript, was introduced in ES6 (ECMAScript 2015) and serves multiple purposes. Here are the main use cases of the spread operator:

// 1. Array Spreading: It allows you to expand an array into individual elements. When used in an array literal or array function call, the spread operator separates the elements of an array. This can be useful when you want to pass multiple elements as arguments to a function or concatenate arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

// Using spread operator in a function call
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // equivalent to sum(1, 2, 3)


// Object Spreading: In addition to arrays, the spread operator can be used with objects to create new object literals. It copies the enumerable properties from one object into another object. This is useful for object merging or creating shallow copies of objects.

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { baz: 'qux', y: 13 };

const mergedObj = { ...obj1, ...obj2 }; // { foo: 'bar', x: 42, baz: 'qux', y: 13 }

// Function Arguments: The spread operator can be used within function arguments to accept a variable number of arguments. It allows you to pass an array of values as separate arguments to a function.

function myFunction(a, b, c) {
    console.log(a, b, c);
  }
  
  const args = [1, 2, 3];
  myFunction(...args); // equivalent to myFunction(1, 2, 3)

//   Copying Arrays and Objects: The spread operator can be used to create shallow copies of arrays and objects. By spreading the elements or properties into a new array or object, you can create a separate copy without modifying the original.

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // [1, 2, 3]

const originalObj = { x: 42, y: 13 };
const copiedObj = { ...originalObj }; // { x: 42, y: 13 }
