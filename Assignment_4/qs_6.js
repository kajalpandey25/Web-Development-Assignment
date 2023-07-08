// What is template literals in ES6 and how do you use them?

// Template literals, introduced in ES6 (ECMAScript 2015), are a way to create strings in JavaScript that allows for easy embedding of variables and expressions within the string. They are defined using backticks (`) instead of single or double quotes.

// Here's an example of a template literal

const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting);

// output: Hello, Alice!




// Template literals support the following features:

// 1. Variable Interpolation: You can embed variables directly within the string using ${} syntax. The variable or expression inside the curly braces will be evaluated and the result will be included in the final string.

const a = 10;
const b = 5;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);


// output: The sum of 10 and 5 is 15.


// 2. Multi-line Strings: Template literals preserve newlines, allowing you to create multi-line strings without the need for escape characters like \n.

const message = `
  This is a
  multi-line
  string.
`;

console.log(message);


// output:   This is a
//   multi-line
//   string.

// 3. Expression Evaluation: Within a template literal, you can include expressions using ${} syntax. These expressions can include any valid JavaScript code, including function calls, arithmetic operations, and ternary operators.

const x = 5;
const y = 3;
console.log(`The maximum value is ${Math.max(x, y)}.`);

// output: The maximum value is 5.

