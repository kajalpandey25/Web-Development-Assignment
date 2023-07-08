//  Explain Hoisting in JavaScript

// Hoisting is a behavioral feature in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared in the code, they are interpreted as if they were declared at the top of their scope.

// In JavaScript, variable declarations using the var keyword are hoisted, but not their initializations. For example:

console.log(x); // Output: undefined
var x = 5;

// In the above code, even though the console.log statement appears before the variable x is declared, it doesn't throw an error. Instead, it prints undefined. This is because during hoisting, the variable declaration var x; is moved to the top, and since it is not initialized yet, it has the value undefined by default.

// Similarly, function declarations are also hoisted. Consider the following example:

foo(); // Output: "Hello"

function foo() {
  console.log("Hello");
}

// In this case, the foo function is called before its actual declaration in the code. However, due to hoisting, the function declaration is moved to the top, allowing the code to execute without any errors and resulting in the output of "Hello".

// It's important to note that hoisting only affects the declarations themselves, not the assignments or initializations. Variable assignments and function expressions are not hoisted. For example:

console.log(x); // Output: ReferenceError: x is not defined
let x = 5;


// In this case, using the let keyword, the variable x is not hoisted, and trying to access it before its declaration results in a ReferenceError.