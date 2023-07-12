// What are Callbacks &  Callback Hell ?
// Callbacks are functions that are passed as arguments to other functions and are executed at a later point in time, often after an asynchronous operation completes. Callbacks allow you to define what should happen after a particular task is finished, enabling asynchronous programming in JavaScript.

// Here's a simple example of using a callback:

function fetchData(callback) {
    // Simulating an asynchronous operation with a setTimeout
    setTimeout(function() {
      const data = "Async data";
      callback(data);
    }, 2000);
  }
  
  function handleData(data) {
    console.log("Received data:", data);
  }
  
  fetchData(handleData);

  
//   Callback Hell, also known as the Pyramid of Doom, is a situation that arises when dealing with multiple asynchronous operations that depend on each other or need to be executed in a specific sequence. It occurs when you have nested callbacks within callbacks, resulting in deeply indented and hard-to-read code.

// Here's an example of Callback Hell:

asyncFunction1(function(result1) {
    asyncFunction2(result1, function(result2) {
      asyncFunction3(result2, function(result3) {
        // And so on...
      });
    });
  });

//   Using Promises, the above example can be rewritten as follows:

asyncFunction1()
  .then(function(result1) {
    return asyncFunction2(result1);
  })
  .then(function(result2) {
    return asyncFunction3(result2);
  })
  .then(function(result3) {
    // And so on...
  })
  .catch(function(error) {
    // Error handling
  });


//   Or using Async/await:

async function fetchData() {
    try {
      const result1 = await asyncFunction1();
      const result2 = await asyncFunction2(result1);
      const result3 = await asyncFunction3(result2);
      // And so on...
    } catch (error) {
      // Error handling
    }
  }
  