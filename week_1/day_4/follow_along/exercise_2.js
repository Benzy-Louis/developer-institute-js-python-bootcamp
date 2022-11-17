/*
Exercise 2
1. Write a JavaScript for loop that will go through the variable names.

if the item is not a string, pass.
if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.

2. Write a JavaScript for loop that will go through the variable names

if the item is not a string, go out of the loop.
if the item is a string, display it.
*/

// let names = ["john", "sarah", 23, "Rudolf", 34];

// for (let value of names) {
//     if (typeof value === 'string') {
//         if (/[A-Z]/.test(value[0])) {
//             console.log(`the value is ${value}`);
//         } else {
//             console.log(`the value is ${value[0].toUpperCase()}${value.substring(1)}`);
//         }

//     }
// }

// console.log("\nSecond part")

// for (let value of names) {
//     if (typeof value === 'string') {
//         if (/[A-Z]/.test(value[0])) {
//             console.log(`the value is ${value}`);
//         } else {
//             console.log(`the value is ${value[0].toUpperCase()}${value.substring(1)}`);
//         }
//     } else {
//         break;
//     }
// }


// if ( firstLetter !== firstLetter.toUpperCase())

let names = ["john", "sarah", 23, "Rudolf", 34]

for (let name of names) {
    if (typeof (name) !== 'string') {
        continue;
    }

    let firstLetter = name.charAt(0)
    if (firstLetter !== firstLetter.toUpperCase()) {
        name = firstLetter.toUpperCase() + name.slice(1);
    }

    console.log(name)
}
console.log("\nSecond part\n")
names = ["john", "sarah", 23, "Rudolf", 34]

for (let name of names) {
    if (typeof (name) !== 'string') {
        continue;
    }
    console.log(name)
}