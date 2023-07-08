// Explain Temporal Dead Zone?

// The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using the let and const keywords. It refers to the period between the start of the scope (block or function) and the actual declaration of a variable, during which accessing the variable results in a ReferenceError.

// In JavaScript, variables declared with let and const are hoisted to the top of their block scope, similar to how variables declared with var are hoisted to the top of their function scope. However, unlike var, variables declared with let and const are not initialized with a default value of undefined. Instead, they enter a "temporal dead zone" where they cannot be accessed or referenced until they are declared.

// Consider the following example:

console.log(x); // Output: ReferenceError: Cannot access 'x' before initialization
let x = 5;

// In this code, the console.log statement tries to access the variable x before it is declared. Since the variable is in the TDZ, it throws a ReferenceError. Only after the variable declaration let x = 5; does the variable become accessible.

// The TDZ also affects block-scoped variables declared with const. The difference is that const variables must be both declared and initialized in the same statement. Here's an example:
{
    console.log(x); // Output: ReferenceError: Cannot access 'x' before initialization
    const x = 5;
  }

//   In this case, accessing the x variable before its declaration and initialization within the block scope results in a ReferenceError.
