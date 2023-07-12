//  Explain Purpose of Try and Catch Block & Why do we need it?

// The purpose of the try and catch blocks in JavaScript is to handle and manage errors or exceptions that occur during the execution of code. These blocks provide a structured way to catch and handle errors, preventing them from causing the program to crash or behave unexpectedly.

// Here's why we need try and catch blocks:

// 1. Error Handling: When a piece of code within the try block encounters an error or throws an exception, the execution is immediately transferred to the corresponding catch block. This allows you to define a specific error-handling logic to deal with the error gracefully instead of abruptly terminating the program.

// 2. Prevent Program Crashes: By using try and catch blocks, you can isolate and handle errors without crashing the entire program. Instead of propagating the error up the call stack and potentially causing an unhandled exception, you can catch the error at an appropriate level and take appropriate actions, such as displaying an error message or providing fallback values.

// 3. Robustness and Reliability: Error handling with try and catch blocks improves the robustness and reliability of your code. By anticipating and handling potential errors, you can ensure that your program can gracefully recover from exceptional situations and continue executing without unintended consequences.

// 4. Debugging and Logging: try and catch blocks are useful for debugging purposes. They allow you to catch and examine errors, log relevant information, and identify the root causes of problems. By providing detailed error messages or logging information, you can diagnose issues and improve the overall quality of your code.

// Example:

try {
    // Code that may throw an error
    const result = someFunction();
    console.log(result);
  } catch (error) {
    // Error handling
    console.error('An error occurred:', error);
    // Perform alternative actions or fallback behavior
  }
  

