// Exercise 1
let sentence = ["my", "favorite", "color", "is", "blue"];
console.log(sentence.join(" "));

// Exercise 2

// 1. Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";

// Function for the mixup exercise
function mixup(str1, str2) {
    // 2. Slice out and swap the first 2 characters of the two strings from part 1.
    str1PreviousSubstring = str1.substring(0, 2);
    str1 = str2.substring(0, 2) + str1.substring(2);
    str2 = str1PreviousSubstring + str2.substring(2);
    // 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
    newWord = `${str1} ${str2}`
    return newWord;
}
// Test case 1
let firstWord = "mix";
let secondWord = "pod";
// 4. Finally console.log the new concatenated string.
console.log(mixup(firstWord, secondWord));

// Test case 2
firstWord = "Hello";
secondWord = "World";
// 4. Finally console.log the new concatenated string.
console.log(mixup(firstWord, secondWord));

// Exercise 3
/*
Make a Calculator. Follow the instructions:

Prompt the user for the first number.
Store the first number in a variable called num1.
Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
Prompt the user for the second number.
Store the second number in a variable called num2.
Create an Alert where the value is the SUM of num1 and num2.
BONUS: Make a program that can subtract, multiply, and also divide!
*/

let num1 = prompt('We\'re adding 2 numbers, input the first number please.');
let num2 = prompt('We\'re adding 2 numbers, input the second number please.');

alert(`The sum of ${num1} and ${num2} is: ${Number(num1) + Number(num2)}`);

// Subtraction example
num1 = prompt('Subtraction example subtracting num2 from num1 i.e result = num1 - num2, please input num1.');
num2 = prompt('Subtraction example subtracting num2 from num1 i.e result = num1 - num2, please input num2.');

alert(`The result of ${num1} - ${num2} is: ${Number(num1) - Number(num2)}`);

// Multiplication example
num1 = prompt('Multiplication example multiplying num1 by num2 i.e result = num1 * num2, please input num1.');
num2 = prompt('Multiplication example multiplying num1 by num2 i.e result = num1 * num2, please input num2.');

alert(`The result of ${num1} * ${num2} is: ${Number(num1) * Number(num2)}`);

// Division example
num1 = prompt('Division example dividing num1 by num2 i.e result = num1 / num2, please input num1.');
num2 = prompt('Division example dividing num1 by num2 i.e result = num1 / num2, please input num2.');

alert(`The result of ${num1} / ${num2} is: ${Number(num1) / Number(num2)}`); 
