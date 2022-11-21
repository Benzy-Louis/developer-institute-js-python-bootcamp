/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/*
Exercise 4 : Biggest Number
Instructions
Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
Note : This function should work with any array;
Example:

const array = [-1,0,3,100, 99, 2, 99] ;// should return 100
const array2 = ['a', 3, 4, 2]; // should return 4
const array3 = []; // should return 0
*/

function biggestNumberInArray(arrayNumber) {
  // Lazily check in a for loop which number is the biggest
  let biggestNum = 0;
  // if the array is empty return 0
  if ( arrayNumber.length > 0) {
    for ( let num of arrayNumber) {
      num = Number(num);
      // Check if the element is a number first
      if ( !(isNaN(num))) {
        // If so update the biggest number
        if ( num > biggestNum ) {
          biggestNum = num;
        }
      }
    }
    return biggestNum;
  }
}

// console.log(biggestNumberInArray([]));
// console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99]));
