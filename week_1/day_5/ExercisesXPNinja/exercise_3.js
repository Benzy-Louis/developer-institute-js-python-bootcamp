/*
Exercise 3 : Is Palindrome?
Instructions
Write a JavaScript function that checks whether a string is a palindrome or not.
Note A palindrome is a word, phrase or sequence that is spelled the same both
backwards and forward, e.g., madam, bob or kayak.
palindrome
*/

function palindrome(str) {
  // reverse the string and lazily check if it's the same
  const reverseStr = str.split('').reverse().join('');
  return reverseStr == str;
}
console.log(palindrome('madam'));
console.log(palindrome('bob'));
console.log(palindrome('kayak'));
console.log(palindrome('orange'));
