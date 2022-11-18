/*
Exercise 1 : Age Difference
Instruction
Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY
*/

firstPersonYearOfBirth = 2002;
secondPersonYearOfBirth = 1990;

//  Given the years two people were born, find the date when the younger one is exactly half the age of the older.
if (firstPersonYearOfBirth <= secondPersonYearOfBirth) {
    yearHalfAgeOfOlder = firstPersonYearOfBirth + 2 * (secondPersonYearOfBirth - firstPersonYearOfBirth);
    console.log(yearHalfAgeOfOlder);
} else {
    yearHalfAgeOfOlder = secondPersonYearOfBirth + 2 * (firstPersonYearOfBirth - secondPersonYearOfBirth);
    console.log(yearHalfAgeOfOlder);
}
