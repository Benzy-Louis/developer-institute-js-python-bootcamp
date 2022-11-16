// let firstName = "John";
// let lastName = "Doe";
// let age = 50;
// let eyeColor = "blue";

// let persons = [
//     ["Jack", "Doe", 20, "blue"],
//     ["John", "Doe", 50, "blue"],
//     ["Bob", "Doe", 35, "green"],
//     ["Alice", "Doe", 40, "black"]
// ]
let persons = {
    id: 123456,
    firstName: "John",
    lastName: "Doe",
    age: 50
}

let johnFirstName = persons['firstName']
persons['eyesColor'] = "blue"
//
persons['eyeColor'];
persons.eyesColor; // same way of accessing the same value