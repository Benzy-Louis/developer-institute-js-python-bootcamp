/*
Exercise 1: Simple If/Else Statement
1. Create 2 variables, x and y. Each of them should have a different numeric value.
2. Write an if/else statement that checks which number is bigger.

let x = 5;
let y = 2;

You should display:
x is the biggest number
*/

let x = 5;
let y = 2;
if (x > y) {
    biggest = x;
} else {
    biggest = y;
}
console.log(`${biggest} is the biggest number among the numbers: ${x} and ${y}.`)