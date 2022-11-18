/*
Exercise 1 : Checking The BMI
Instructions
Hint:
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

Create two objects, each object should hold a person’s details. Here are the details:
FullName
Mass
Height

Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

Outside of the objects, create a JS function that compares the BMI of both objects.

Display the name of the person who has the largest BMI.
*/

class Person {
    constructor(FullName, Mass, Height) {
        this.FullName = FullName;
        this.Mass = Mass;
        this.Height = Height;
        this.bmi = function () {
            return Number(this.Mass) / (Number(this.Height) ** 2)
        }
    }
}

person1 = new Person("Ruben", 100, 1.80);
person2 = new Person("Benz", 80, 1.60);

function largestBMI(person1, person2) {
    person1.bmi() > person2.bmi() ? console.log(`${person1.FullName} has the largest BMI.`) : console.log(`${person2.FullName} has the largest BMI.`)
}

largestBMI(person1, person2);