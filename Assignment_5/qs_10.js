// How do you define an asynchronous function in JavaScript using async/await?

// To define an asynchronous function in JavaScript using async/await, you need to use the async keyword when declaring the function. This indicates that the function will perform asynchronous operations and return a promise.

// Here's the syntax to define an asynchronous function:

async function functionName() {
  // Asynchronous operations
  // Await statements
  // Return a value or promise
}
// Here's an example that demonstrates the usage of async and await:

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
}

