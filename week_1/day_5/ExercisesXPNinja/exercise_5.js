/* eslint-disable max-len */
/*
Exercise 5: Unique Elements
Instructions
Write a JS function that takes an array and returns a new array with only unique elements.

Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
/*
The filter(callBackFn) method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
filter(callBackFn)
// Callback function
callbackFn
A function to execute for each element in the array. It should return a truthy to keep the element in the resulting array, and a falsy value otherwise.
function callBackFn(element, index, array) { ...}
*/

// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates

function filteringFunction(element, index, array) {
  // condition to pass for elem to be filtered in
  return array.indexOf(element) === index;
}

function uniqueElements(arr) {
  return arr.filter(filteringFunction);
}

console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5]));
console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 'a', 'a', 'A', 5]));
