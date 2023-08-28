/* eslint-disable max-len */
// Using arrow function and ternary operator create a calculator that returns the result of the calculus depending on the operator : +, - , * ,

// // The function should be able to to take 2 numbers as parameters

// const calc = (num1, num2, op) => {
//   return op === '+' ? num1 + num2 : (op === '-' ? num1 - num2 : num1 * num2);
// };

// console.log(calc(5, 2, '+'));
// console.log(calc(5, 2, '-'));
// console.log(calc(5, 2, '*'));


// const myArr = [10, 11, 12, 15, 20];

// myArr.forEach((number, i, arr) => {
//   if (arr[i] % 2 == 0) {
//     console.log(number);
//   }
// });

// myArr.forEach((value) => {
// value % 2 == 0 ? console.log(value):'';
// });


const myArr = ['wow', 'hey', 'bye'];

// // Check if at least one element of the array starts with the letter 'h'

console.log(myArr.some((word) => word[0] === 'h'));

// string method, str.startsWith("<char>") as well can be used.

// const myArr = ['hello', 'hey', 'hola'];
// console.log(myArr.every((word)=> word[0] === 'h'));
