// how can you handle Async code in JavaScript?
// In JavaScript, you can handle asynchronous code using various techniques to ensure proper execution and manage the flow of asynchronous operations. Here are some commonly used approaches:

// 1. Callbacks: Callback functions are a traditional way of handling asynchronous operations in JavaScript. You pass a function as a callback argument to an asynchronous function, and that function is executed once the asynchronous operation is complete.

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



//  2.  Promises: Promises provide a more structured and readable way to handle asynchronous code. A promise represents the result (or failure) of an asynchronous operation and allows you to chain actions using then and catch methods.


function fetchData() {
    return new Promise(function(resolve, reject) {
      // Simulating an asynchronous operation with a setTimeout
      setTimeout(function() {
        const data = "Async data";
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(function(data) {
      console.log("Received data:", data);
    })
    .catch(function(error) {
      console.error("Error:", error);
    });

    
    // 3. Async/await: Async/await is a more modern and syntactically convenient way to handle asynchronous code. It allows you to write asynchronous code in a synchronous-looking manner, making it easier to understand and maintain.


    function fetchData() {
        return new Promise(function(resolve, reject) {
          // Simulating an asynchronous operation with a setTimeout
          setTimeout(function() {
            const data = "Async data";
            resolve(data);
          }, 2000);
        });
      }
      
      async function handleData() {
        try {
          const data = await fetchData();
          console.log("Received data:", data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      handleData();

      
      