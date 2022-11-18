/* eslint-disable max-len */
/*
 Exercise 1 : Information
Instructions
Part I : function with no parameters

1. Create a function called infoAboutMe() that takes no parameter.
2. The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
3. Call the function.
*/
console.log('\nPart I : function with no parameters\n');
function infoAboutMe() {
  console.log('I\'m Ruben Louis, and I draw as a hobby.');
}

infoAboutMe();

/*
Part II : function with three parameters

1. Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
2. The function should console.log a sentence about the person (ie. "You name is …, you are .. years old, your favorite color is …")
3. Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/
console.log('\nPart II : function with three parameters\n');

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(`Your name is ${personName}, you are ${personAge} years old, your fabvorite color is ${personFavoriteColor}.`);
}

infoAboutPerson('David', 45, 'blue');
infoAboutPerson('Josh', 12, 'yellow');

