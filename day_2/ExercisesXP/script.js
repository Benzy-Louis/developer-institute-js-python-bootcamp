// Exercise 1
// Store your favorite food into a variable.
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>
// If your favorite food is "chocolate",
// and your favorite meal of the day is "dinner",
// you will console.log
// I eat chocolate at every dinner
favoriteFood = "boiled noodles";
favoriteMealOfTheDay = "lunch";
console.log(`I eat ${favoriteFood} at every ${favoriteMealOfTheDay}.`);


// Exercise 2
/*
Series
=====
Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
*/
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
/*
Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory
*/
let myWatchedSeriesSentence = myWatchedSeries.slice(0, 2).join(", ") + ", and " + myWatchedSeries.slice(-1);
// console.log(myWatchedSeriesSentence)
/*
Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory
*/
console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}.`);

/*
===
Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
Add, at the end of the array, the name of another series you watched.
*/
myWatchedSeries.pop();
myWatchedSeries.push("friends");
// console.log(myWatchedSeries);
myWatchedSeries.push("stranger things");
// console.log(myWatchedSeries);
/*
Add, at the beginning of the array, the name of your favorite series.
Delete the series “black mirror”.
*/
myWatchedSeries.unshift("the witcher")
myWatchedSeries.splice(1, 1);
/*
Console.log the third letter of the series “money heist”.
*/
console.log(myWatchedSeries[1][2]);

/*
Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
*/
console.log(myWatchedSeries);


// Exercise 3

// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let celsiusTemperature = 20;
console.log(`${celsiusTemperature}°C is ${((celsiusTemperature / 5) * 9 + 32)}°F`);

// Exercise 4

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55
// Actual: 55
// Explanation: a simple arithmetic operation between Numbers here.
a = 2;

console.log(a + b); //second expression
// Prediction: 23
// Actual: 23
// Explanation: Only variable a gets updated with a new value

// Exercise 5

typeof (15);
// Prediction: Number
// Actual: Number
// Integers have a type of Number

typeof (5.5);
// Prediction: Number
// Actual: Number

typeof (NaN);
// Prediction: Number
// Actual: Number
// https://stackoverflow.com/a/2801617

typeof ("hello");
// Prediction: string
// Actual: string

typeof (true);
// Prediction: boolean
// Actual: boolean

typeof (1 != 2);
// Prediction: boolean
// Actual: boolean

"hamburger" + "s";
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s";
// Prediction: NaN
// Actual: NaN

"1" + "3";
// Prediction: "13"
// Actual: "13"

"1" - "3";
// Prediction: -2
// Actual: -2
// Explanation: If you subtract a string from a string, where both represent a Number value, 
// the result will be that of the arithmetic operation of the values : https://stackoverflow.com/a/40848608

"johnny" + 5;
// Prediction: "johnny5"
// Actual: "johnny5"
// Explanation: If you add a Number and a string, the result will be a string concatenation: https://stackoverflow.com/a/40848608

"johnny" - 5;
// Prediction: NaN
// Actual: NaN
// Explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#description
// A method or expression whose operand is or gets coerced to NaN


99 * "hello";
// Prediction: NaN
// Actual: NaN
// Explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#description
// A method or expression whose operand is or gets coerced to NaN


1 != 1;
// Prediction: false
// Actual: false
// Explanation: Since 1 is equal to 1 the check with the condition 1 is not equal to 1 returns false.

1 == "1";
// Prediction: true
// Actual: true
// Explanation:The condition checks only if values are the same 

1 === "1";
// Prediction: false
// Actual: false
// Explanation: Strict equality, the condition checks if both the types and values are the same 


// Exercise 6

5 + "34";
// Prediction: "534"
// Actual: "534"
// Explanation: If you add a Number and a string, the result will be a string concatenation: https://stackoverflow.com/a/40848608

5 - "4";
// Prediction: 1
// Actual: 1
// Explanation: If you subtract a string from a Number, the result will be the arithmetic operation of the 2 values, if the value of the string corresponds to a Number: https://stackoverflow.com/a/40848608


10 % 5;
// Prediction: 0
// Actual: 0
// Explanation: Modulo arithmetic operation, here gives the remainder of 10 divided by 5 which is 0

5 % 10;
// Prediction: 5
// Actual: 5
// Explanation: Modulo arithmetic operation, here gives the remainder of 5 divided by 10 which is 5

"Java" + "Script";
// Prediction: "JavaScript"
// Actual: "JavaScript"
// Explanation: Simple concatenation of 2 strings


" " + " ";
// Prediction: "  "
// Actual: "  "
// Explanation: Simple concatenation of 2 strings

" " + 0;
// Prediction: ' 0'
// Actual: ' 0'
// Explanation: If you add a Number and a string, the result will be a string concatenation: https://stackoverflow.com/a/40848608

true + true;
// Prediction: 2
// Actual: 2
// Explanation: Number representation of false is 0 and 1 for true, so this is treated as a simple arithmetic operation
// https://dorey.github.io/JavaScript-Equality-Table/unified/

true + false;
// Prediction: 1
// Actual: 1
// Explanation: Number representation of false is 0 and 1 for true, so this is treated as a simple arithmetic operation
// https://dorey.github.io/JavaScript-Equality-Table/unified/

false + true;
// Prediction: 1
// Actual: 1
// Explanation: Number representation of false is 0 and 1 for true, so this is treated as a simple arithmetic operation
// https://dorey.github.io/JavaScript-Equality-Table/unified/

false - true;
// Prediction: -1
// Actual: -1
// Explanation: Number representation of false is 0 and 1 for true, so this is treated as a simple arithmetic operation
// https://dorey.github.io/JavaScript-Equality-Table/unified/

!true;
// Prediction: false
// Actual: false
// Explanation: not operator

3 - 4;
// Prediction: -1
// Actual: -1
// Explanation: Just a simple subtraction operation with 2 integers

"Bob" - "bill";
// Prediction: NaN
// Actual: NaN
// Explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#description
// A method or expression whose operand is or gets coerced to NaN






