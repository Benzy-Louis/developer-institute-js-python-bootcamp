/*
Exercise 2: Capitalized Letters
Instructions
Create a function that takes a string as an argument.
Have the function return:
The string but all letters in even indexes should be capitalized.
The string but all letters in odd indexes should be capitalized.
Note:

Index 0 will be considered even.
The argument of the function should be a lowercase string with no spaces.
For example,

capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
*/

function capitalize(str) {
  let oddStr = '';
  let evenStr = '';
  for (const index in str) {
    if (index % 2 == 0) {
      evenStr += str[index].toUpperCase();
      oddStr += str[index];
    } else {
      evenStr += str[index];
      oddStr += str[index].toUpperCase();
    }
  }
  return [evenStr, oddStr];
}

console.log(capitalize('abcdef'));
