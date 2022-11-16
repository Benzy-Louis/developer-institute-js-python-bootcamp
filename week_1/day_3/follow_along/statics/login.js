/*
Create a stuctured html file linked to a JS file
1. Create an object that has properties "username" and "password". Fill those values in with strings.
2. Create an array which contains the object you have made above and name the array "database".
3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
*/

let login = {
    username: "John",
    password: "12345",
};

let database = [login];

console.log(database);

// Someone else snippet
let newsfeed = [
    { username: "a1", timeline: "b1" },
    { username: "a2", timeline: "b2" },
    { username: "a3", timeline: "b3" },
]
console.log(newsfeed);
console.log(newsfeed[0].username);
