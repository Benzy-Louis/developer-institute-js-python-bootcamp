/* eslint-disable max-len */
/*
Exercise 3 : SwapCase
Instructions
Write a JavaScript function which takes a string as an argument and swaps the case of each character.
For example :

if you input 'The Quick Brown Fox'
the output should be 'tHE qUICK bROWN fOX'.
*/
function swapCase(str) {
  let outputStr = '';
  for (const char of str) {
    char === char.toLowerCase() ? outputStr += char.toUpperCase() : outputStr += char.toLowerCase();
  }
  return outputStr;
}

// console.log(swapCase('This'));
console.log(swapCase('The Quick Brown Fox'));
