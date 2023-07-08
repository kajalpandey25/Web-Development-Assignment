//  What’s difference between map & forEach?

// Both map and forEach are array methods in JavaScript that allow you to iterate over an array and perform operations on its elements. However, they have some key differences in terms of their behavior and return values:

// 1.Return Value: The map method returns a new array containing the results of applying a callback function to each element of the original array. On the other hand, the forEach method does not return anything; it simply iterates over the array and executes a callback function for each element.

const number = [1, 2, 3];

const doubled = number.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]

numbers.forEach((num) => console.log(num)); // Output: 1 2 3


// 2. Transformation vs. Side Effects: map is typically used when you want to transform each element of an array into a new value and collect the results. It creates a new array without modifying the original one. On the other hand, forEach is used when you want to perform some operation or side effect for each element in the array, such as logging values or updating external variables.

// 3. Ability to Chain: Since map returns a new array, it can be easily chained with other array methods like filter, reduce, or sort. This allows for more expressive and concise code. forEach, being a void function, cannot be chained in the same way.

const numbers = [1, 2, 3];

const squaredEvenNumbers = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 2);

console.log(squaredEvenNumbers); // Output: [4]

