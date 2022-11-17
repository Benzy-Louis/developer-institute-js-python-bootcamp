/*
Exercise 5 : Family
Instructions
1. Create an object called family with a few key value pairs.
*/

const family = {
    numberOfMembers: 4,
    maxAgeOfMembers: 40,
    medianAgeOfMembers: 20
}

/*
2. Using a for in loop, console.log the keys of the object.
*/

for (let key in family) {
    console.log(`key: ${key}`);
}

/*
3. Using a for in loop, console.log the values of the object.
*/
for (let key in family) {
    console.log(`value: ${family[key]}`);
}