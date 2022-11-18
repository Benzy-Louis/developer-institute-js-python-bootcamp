/*
Exercise 1 : Divisible By Three
Instructions
let numbers = [123, 8409, 100053, 333333333, 7]
Loop through the array above and determine whether or not each number is divisible by three.
Each time you loop console.log true or false.
*/

let numbers = [123, 8409, 100053, 333333333, 7];

for (number of numbers) {
    if ((number % 3) == 0) {
        console.log(`${number} : true`)
    } else {
        console.log(`${number} : false`)
    }
}