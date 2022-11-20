/*
Exercise 2 : Abbrev_name
Instructions
Write a JavaScript function to convert a string into an abbreviated form.

console.log(abbrevName("Robin Singh")); --> "Robin S."
*/
function abbrevName(str) {
  // Split on space the abbreviate other words
  const arr = str.split(' ');
  let abbrev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    abbrev += ' ' + arr[i][0] + '.';
  }
  return abbrev;
}
console.log(abbrevName('Robin Singh'));
