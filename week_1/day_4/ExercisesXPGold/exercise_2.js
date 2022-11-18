/* eslint-disable max-len */
/*
Exercise 2 : Attendance
Instructions
*/
const guestList = {
  randy: 'Germany',
  karla: 'France',
  wendy: 'Japan',
  norman: 'England',
  sam: 'Argentina',
};

/*
Given the object above where the key is the student’s name and the value is the country they are from.
*/

// 1. Prompt the student for their name.
const studentName = prompt('What\'s your name, student?');
// let studentName = "Wendy";
// let studentName = "Chris";
// let studentName = "Ruben";
// let studentName = NaN;


// 2. If the name is in the object, console.log the name of the student and the country they come from.

/*
For example: "Hi! I'm [name], and I'm from [country]."
    -Hint: You don’t need to use a for loop, just look up the statement if ... in
*/

// 3. If the name is not in the object, console.log: "Hi! I'm a guest."

if (((typeof studentName) === 'string')) {
  if (studentName.toLowerCase() in guestList) {
    console.log(`Hi! I'm ${studentName}, and I'm from from ${guestList[studentName.toLocaleLowerCase()]}.`);
  } else {
    console.log('Hi! I\'m a guest.');
  }
}
