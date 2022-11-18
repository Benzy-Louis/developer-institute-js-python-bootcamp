/* eslint-disable max-len */
/*
Exercise 2 : Your Favorite Colors
Instructions
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus
*/

const favoriteColors = ['red', 'blue', 'yellow', 'green', 'black'];

console.log('PART 1 - #\n');
// eslint-disable-next-line guard-for-in
for (const i in favoriteColors) {
  console.log(`My #${parseInt(i) + 1} choice is ${favoriteColors[i]}`);
}

console.log('\nPART 2 - BONUS\n');

const suffix = ['st', 'nd', 'rd', 'th', 'th'];
// eslint-disable-next-line guard-for-in
for (const i in favoriteColors) {
  console.log(`My ${parseInt(i) + 1}${suffix[i]} choice is ${favoriteColors[i]}`);
}
