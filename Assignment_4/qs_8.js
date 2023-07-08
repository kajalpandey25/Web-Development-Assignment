//  How can you destructure objects and arrays in ES6?

// In ES6 (ECMAScript 2015) and later versions, you can destructure objects and arrays using a shorthand syntax. Destructuring allows you to extract values from objects or arrays and assign them to variables in a more concise and intuitive way. Here's how you can destructure objects and arrays:

// Destructuring Objects:

const person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Extracting values from the object
  const { name, age, address } = person;
  console.log(name); // 'John'
  console.log(age); // 30
  console.log(address); // { city: 'New York', country: 'USA' }
  
  // Nested object destructuring
  const { city, country } = person.address;
  console.log(city); // 'New York'
  console.log(country); // 'USA'

  
//   Destructuring Arrays:



const numbers = [1, 2, 3, 4, 5];

// Extracting values from the array
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Skipping array elements
const [, , third, , fifth] = numbers;
console.log(third); // 3
console.log(fifth); // 5

// You can also combine object and array destructuring in more complex scenarios:

// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     },
//     hobbies: ['reading', 'traveling', 'photography']
//   };
  
//   // Destructuring object and array properties
//   const { name, address: { city }, hobbies: [firstHobby, secondHobby] } = person;
//   console.log(name); // 'John'
//   console.log(city); // 'New York'
//   console.log(firstHobby); // 'reading'
//   console.log(secondHobby); // 'traveling'
  