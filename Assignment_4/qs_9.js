// How can you define default parameter values in ES6 functions?


// In ES6 (ECMAScript 2015) and later versions, you can define default parameter values for function parameters. Default parameter values allow you to specify a default value that will be used if an argument is not provided or is undefined when calling the function. Here's how you can define default parameter values in ES6 functions:

function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  greet(); // Hello, Guest!
  greet('John'); // Hello, John!

//   In the example above, the greet function has a single parameter name with a default value of 'Guest'. If no argument is provided when calling the function, or if the argument is undefined, the default value 'Guest' will be used. When the function is called with the argument 'John', the provided value 'John' will override the default value.

// You can also use expressions and function calls as default values:

function multiply(a, b = 2) {
    return a * b;
  }
  
  console.log(multiply(5)); // 10
  console.log(multiply(5, 3)); // 15
  
//   In the multiply function, the b parameter has a default value of 2. If b is not provided or is undefined, the default value 2 will be used. However, if b is provided, the provided value will override the default.