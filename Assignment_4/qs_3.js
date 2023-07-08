// Difference between var & let?

// In most programming languages, including JavaScript, both var and let are used to declare variables. However, they have some differences in terms of scope and hoisting:

// 1. Scope: Variables declared with var are function-scoped, meaning they are accessible within the entire function in which they are defined. On the other hand, variables declared with let are block-scoped, which means they are only accessible within the block (a pair of curly braces) where they are defined.

// Example with var:

function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Outputs 10
}

// Example with let:

function example() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Throws an error: ReferenceError: x is not defined
}

// 2. Hoisting: Variables declared with var are hoisted to the top of their containing function or global scope. This means you can use a variable before it's declared, but its value will be undefined. Variables declared with let (and const) are also hoisted but are not initialized, resulting in a ReferenceError if you try to use them before their declaration.

// Example with var:
function example() {
  console.log(x); // Outputs undefined
  var x = 10;
}

// Example with let:

function example() {
  console.log(x); // Throws an error: ReferenceError: x is not defined
  let x = 10;
}

// It is generally recommended to use let (or const) over var in modern JavaScript, as let provides block scoping and helps prevent certain types of bugs caused by hoisting and accidental variable redeclarations.




  
