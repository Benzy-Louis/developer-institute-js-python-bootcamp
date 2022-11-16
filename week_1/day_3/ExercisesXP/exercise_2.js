/*
Exercise 2: Chihuahua
Instructions
1. Create a variable called newDog where it’s value is "Chihuahua".
2. Check and display how many letters are in newDog.
3. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
4. Check if the variable newDog is equal to "Chihuahua"
if it does, display 'I love Chihuahuas, it's my favorite dog breed'
else, console.log 'I dont care, I prefer cats'
*/

let newDog = "Chihuahua";
console.log(newDog.length); // number of characters in the variable newDog
console.log(newDog.toUpperCase())// displaying newDog in uppercase
console.log(newDog.toLowerCase())// displaying newDog in lowercase
// Part 4
if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it's my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}