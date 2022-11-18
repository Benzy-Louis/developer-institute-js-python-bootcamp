/*
Exercise 3 : Playing With Numbers
Instructions
let age = [20,5,12,43,98,55];
Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.


1. Console.log the sum of all the numbers in the age array.
2. Console.log the highest age in the array.
*/
let age = [20, 5, 12, 43, 98, 55];
let sum = 0;

// 1. Console.log the sum of all the numbers in the age array.
for (num of age) {
    sum += num;
}
console.log("Sum of all the numbers in the age array: " + sum);

// 2. Console.log the highest age in the array.
// Using an unefficient way
let highestAge = age[0];
for (num of age) {
    if (num > highestAge) {
        highestAge = num;
    }
}
console.log("The highest age: " + highestAge);