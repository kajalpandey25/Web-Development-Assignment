// What’s async & await Keyword in JavaScript?

// In JavaScript, the async and await keywords are used to handle asynchronous operations in a more synchronous and readable manner. They were introduced in ECMAScript 2017 (ES8) and provide a syntax for working with promises.

// Here's a breakdown of the async and await keywords:

// async: The async keyword is used to declare an asynchronous function. When a function is marked as async, it automatically returns a promise. This allows you to use the await keyword inside the function to pause the execution and wait for a promise to resolve before continuing.
// Example:


async function fetchData() {
  // Asynchronous operation
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
// In the above example, the fetchData function is marked as async. It uses the await keyword to pause the execution until the promise returned by fetch resolves, and then it proceeds to parse the response as JSON using response.json(). The function ultimately returns the parsed data.

// await: The await keyword is used to pause the execution of an async function until a promise is resolved or rejected. It can only be used inside an async function. When encountering the await keyword, the function halts and waits for the promise to settle. If the promise resolves successfully, the resolved value is returned. If the promise is rejected, an error is thrown, which can be caught using try...catch blocks.
// Example:

async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

async function processData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
// In the above example, the processData function calls the fetchData function using await. It waits for the fetchData function to complete and returns the data. If any error occurs during the execution of fetchData, it is caught in the catch block.
