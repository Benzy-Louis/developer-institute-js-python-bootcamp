/*
Exercise 7 : Secret Group
Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
2. Console.log the name of their secret society. The output should be “ABJKPS”
*/

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firstLetterOfNames = [];
for (let name of names) {
    firstLetterOfNames.push(name[0]);
};
firstLetterOfNames.sort()
console.log(firstLetterOfNames.join(""));

