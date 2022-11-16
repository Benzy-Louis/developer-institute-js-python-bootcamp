// Exercise 1: Evaluation
/*
For each expression, predict what you think the output will be in a comment without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
*/

console.log(5 >= 1) // true: 5 is greater than 1
console.log(0 === 1) // false: the value of the number 0 is not the same as 1
console.log(4 <= 1) // false: 4 is not less than 1
console.log(1 != 1) // false: 1 is equal to 1  
console.log("A" > "B") // false: ASCII Number value of "A" is less than "B"
console.log("B" < "C") // true: ASCII Number value of "A" is less than "B"
console.log("a" > "A") // true: since the ASCII Number value of the lowercase chars is greater than the uppercase value of the char
console.log("b" < "A") // false: since the ASCII Number value of the lowercase chars is greater than the uppercase value of the char
console.log(true === false) // false: Only the value doesn't match
console.log(true != true) // false: In principle true cannot be not equal to true for example.

// Exercise 2 : Ask For Numbers
/*
Instructions
Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
    Hint: use some string methods
Examples
"2,3"➞ 5
*/

let strAskForNumbers = prompt('Please input numbers separated by commas\n \
                   and we\'ll add them e.g. "2,3,4"➞ 9 ');

let splittedString = strAskForNumbers.split(",");
sum = splittedString.map(function (elt) { // assure the value can be converted into an integer
    return /^\d+$/.test(elt) ? parseInt(elt) : 0;
}).reduce(function (a, b) { // sum all resulting numbers
    return a + b
})

alert(`The sum of the numbers is: ${sum}`);

/*
Exercise 3 : Find Nemo
Instructions
Hint: if statement (tomorrow’s lesson)

Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
Find the word “Nemo”
Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
If you can’t find Nemo, console.log “I can’t find Nemo”.
Some examples:

    "I love the movie named Nemo" ➞ "I found Nemo at 5"
    "Nemo is a cute fish" ➞ "I found Nemo at 0"
    "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"
*/

// Function finding Nemo
function findingNemo(strContainingNemo) {
    foundNemoAt = strContainingNemo.split(" ").indexOf("Nemo");
    if (foundNemoAt == -1) {
        // I expect only a comma once at the end of the string
        foundNemoAt = strContainingNemo.split(" ").indexOf("Nemo,");
        if (foundNemoAt == -1) {
            return "I can't find Nemo";
        }
    }
    return `I found Nemo at ${foundNemoAt}`;
}

let text = prompt('Input a sentence containing the word "Nemo" (or not) for me please');

alert(`${findingNemo(text)}`);

alert(`The sum ofthe numbers is: ${sum}`);