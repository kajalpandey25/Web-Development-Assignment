//   Explain SetTimeOut and setInterval ?

// setTimeout and setInterval are functions in JavaScript that allow you to schedule the execution of code after a specified delay. They are commonly used for implementing timed actions, animations, periodic updates, and other time-dependent operations in web development.

// Here's an explanation of each function:

// setTimeout:
// The setTimeout function is used to schedule the execution of a function (or an expression) after a specified delay. It takes two parameters: the function to be executed and the delay time in milliseconds.


// syntax:
// setTimeout(function, delay);

setTimeout(function() {
    console.log("Delayed function executed!");
  }, 2000);
  
//   In the example above, the function inside setTimeout will be executed after a delay of 2000 milliseconds (2 seconds). It is a one-time execution, meaning the function will be called only once.

// setInterval:
// The setInterval function is used to repeatedly execute a function (or an expression) at a specified interval. It takes two parameters: the function to be executed and the interval time in milliseconds.

// Syntax:
// setInterval(function, interval);

setInterval(function() {
    console.log("Repeated function executed!");
  }, 1000);

  
//   In the example above, the function inside setInterval will be executed repeatedly with an interval of 1000 milliseconds (1 second) between each execution. The function will continue to execute until it is explicitly stopped or the page is unloaded.

//   To stop the execution of a function scheduled with setInterval, you can use the clearInterval function and pass the interval identifier returned by setInterval as an argument

var intervalId = setInterval(function() {
    console.log("Repeated function executed!");
  }, 1000);
  
  // Stop the execution after 5 seconds
  setTimeout(function() {
    clearInterval(intervalId);
  }, 5000);

//   In the example above, the setInterval function is called with a delay of 1000 milliseconds (1 second) between each execution. After 5 seconds, the clearInterval function is used to stop the execution of the repeated function by passing the interval identifier (intervalId) returned by setInterval.