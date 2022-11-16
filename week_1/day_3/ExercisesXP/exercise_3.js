/*
Exercise 3: Even Or Odd
Instructions
1. Prompt the user for a number and save it to a variable.
2. Check whether the variable is even or odd.
    - If it is even, display: "x is an even number". Where x is the actual number the user chose.
    - If it is odd, display: "x is an odd number". Where x is the actual number the user chose.
*/

// 1. Prompt the user for a number and save it to a variable.
let userNumber = prompt("Input a number please");
userNumber = parseInt(userNumber); // Cast the string to an integer Number type

// 2. Check whether the variable is even or odd.
if ((userNumber % 2) == 0) {
    // - If it is even, display: "x is an even number". Where x is the actual number the user chose.
    alert(`${userNumber} is an even number`)
} else if (userNumber % 2 != 0 && !(isNaN(userNumber))) {
    // - If it is odd, display: "x is an odd number". Where x is the actual number the user chose.
    alert(`${userNumber} is an odd number`)
}
