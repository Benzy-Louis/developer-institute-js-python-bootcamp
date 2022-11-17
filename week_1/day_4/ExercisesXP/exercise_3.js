/*
Exercise 3 : Repeat The Question
Instructions
1. Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
2. While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
*/

let userNumber;
do {
    userNumber = parseInt(prompt("Input a number"));
} while ((userNumber < 10) || (isNaN(userNumber)));