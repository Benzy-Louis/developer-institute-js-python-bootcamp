/*
Exercise 2 : Grade Average
Instructions
Hint:
- This Exercise is trickier then the others. You have to think about its structure before you start coding.
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

1. Create a function called findAvg(gradesList) that takes an argument called gradesList.

2. Your function must calculate and console.log the average.

3. If the average is above 65 let the user know they passed

4. If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other.
*/
let grades = [20, 85, 90, 70, 80, 80];
// let grades = [20, 40, 90, 3, 4, 5];

function findAvg(gradesList) {
    let avg = 0;
    for (grade of gradesList) {
        avg += Number(grade)
    }
    avg /= gradesList.length;
    console.log("Average grade: " + avg.toFixed(1))
    return avg;
}

function passCheck(avgGrade) {
    if (avgGrade > 65) {
        console.log("You passed!")
    } else {
        console.log("You failed, you have to repeat the course.")
    }
}
passCheck(findAvg(grades));