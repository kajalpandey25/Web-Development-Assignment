// What are Promises & Explain Some Three Methods of Promise

// In programming, promises are a way to handle asynchronous operations and manage the flow of data. A promise represents a value that may not be available immediately but will be resolved at some point in the future. It provides a mechanism for handling success and failure scenarios of an asynchronous operation.

// Promises typically have three states:

// Pending: This is the initial state of a promise. It means that the asynchronous operation is still ongoing and the promise has not been fulfilled or rejected yet.

// Fulfilled: The promise is fulfilled when the asynchronous operation completes successfully. At this point, the promise is considered resolved, and any success handlers attached to it will be triggered with the resolved value.

// Rejected: The promise is rejected when the asynchronous operation encounters an error or fails to complete. The promise is considered resolved with a rejection, and any error handlers attached to it will be triggered with the reason for the rejection.

// To work with promises, there are several methods available. Here are three commonly used methods for promises:

// then: The then method is used to attach success handlers to a promise. It takes two optional arguments: a success handler function and an error handler function. The success handler is called when the promise is fulfilled, and the error handler is called when the promise is rejected.
// Example:

promise.then(
  function(result) {
    // Handle success
  },
  function(error) {
    // Handle error
  }
);
// catch: The catch method is used to attach an error handler to a promise. It is a shorthand for attaching only an error handler without a success handler. It is equivalent to calling then(undefined, errorHandler).
// Example:


promise.catch(function(error) {
  // Handle error
});
// finally: The finally method allows you to attach a handler that will be called regardless of whether the promise is fulfilled or rejected. This method is useful for performing cleanup or finalization tasks.
// Example:

promise.finally(function() {
  // Perform cleanup or finalization tasks
});