// Exercise 1
console.log("Part I\n")
const people = ["Greg", "Mary", "Devon", "James"];

/*
Part I - Review About Arrays
Write code to remove “Greg” from the people array.
*/
people.shift();
console.log(people);

/*
Write code to replace “James” to “Jason”.
*/
people.pop();
people.push("Jason");
console.log(people);
/*
Write code to add your name to the end of the people array.
*/
people.push("Ruben");
console.log(people);

/*
Write code that console.logs Mary’s index.take a look at the indexOf method on Google.
*/
console.log(`Index of Mary in the array: ${people.indexOf("Mary")}`);
/*
Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
    Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method
*/

let peopleCopy = people.slice(1, people.length - 1);
console.log(peopleCopy);

/*
Write code that gives the index of “Foo”. Why does it return -1 ?
*/
// Since the question doesn't say in which array, I'll use array people for that
console.log(people.indexOf("foo"));
// The indexOf() method returns -1 if the value is not found.
// Here "foo" isn't in the arrays we're using as examples
// https://www.w3schools.com/jsref/jsref_indexof.asp

/*
    Create a variable called last which value is the last element of the array.
        Hint: What is the relationship between the index of the last element in the array and the length of the array ?
*/
// Since the question doesn't say in which array, I'll use array people for that
console.log(people);
last = people.slice(-1);
console.log(last);
console.log("\nPart II\n")
/*

            Part II - Loops
Using a loop, iterate through the people array and console.log each person.
*/
console.log("\nPart II - A\n")

for (let person of people) {
    console.log(person)
}

/*
Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
Hint: take a look at the break statement in the lesson.
*/
console.log("\nPart II - B\n")

for (let person of people) {
    console.log(person);
    if (person === "Jason") {
        break;
    }
}
