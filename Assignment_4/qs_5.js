//  What is the difference between let and const ?

// In JavaScript, let and const are used to declare variables, but they have some key differences in terms of how they can be used and their behavior. Here are the main differences:

// 1. Mutable vs. Immutable: Variables declared with let are mutable, meaning their values can be reassigned. On the other hand, variables declared with const are immutable, and their values cannot be reassigned once they are initialized.

let x = 5;
x = 10; // Valid reassignment

const y = 5;
y = 10; // Error: Assignment to constant variable

// 2. Block Scope: Both let and const are block-scoped, which means they are only accessible within the block where they are defined or declared. A block is typically defined by a pair of curly braces {}.

{
    let x = 5;
    const y = 10;
  }
  
  console.log(x); // Error: x is not defined
  console.log(y); // Error: y is not defined

//   3.Hoisting: Variables declared with let and const are hoisted to the top of their respective scope, but they are not initialized. This means you cannot access them before they are declared.

console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined

// let x = 5;
// const y = 10;
