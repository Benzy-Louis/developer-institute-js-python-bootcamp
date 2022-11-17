/*
Exercise 2 : The Grade Assigner
Instructions
Ask the user for their grade.

If the grade is bigger than 90, console.log "A"

If the grade is between 80 and 90 (included), console.log "B"
If the grade is between 70(included) and 80 (included), console.log "C"
If the grade is lower than 70, console.log "D"
*/

let userGrade = Number(prompt("Input your grade please."));

if (userGrade > 90) {
    console.log("A");
} else if ((userGrade > 80) && (userGrade <= 90)) {
    console.log("B");
} else if ((userGrade >= 70) && (userGrade <= 80)) {
    console.log("C");
} else if ((userGrade >= 0) && (userGrade < 70)) {
    console.log("D");
}

