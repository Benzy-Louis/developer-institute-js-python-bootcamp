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

// Finally console.log the new concatenated string.
