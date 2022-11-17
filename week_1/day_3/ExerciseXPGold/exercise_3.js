/*
Exercise 3 : Verbing
Instructions
1. Prompt the user for a string. It must be a verb.
2. If the length of the string is at least 3 and the string doesn’t end with "ing", add ‘ing’ to the end of the string.
3. If the length of the string is at least 3 and the string ends with "ing" add "ly" to it’s end.
4. If the length of the string is less than 3, leave it unchanged.
Example:

  The string is : "swim" , your program should console.log : "swimming" // This instruction isn't good
  The string is : "swimming", your program should console.log : "swimmingly"
  The string is : "go" your program should console.log : "go"
*/

// userVerb = prompt("Please enter a verb");
// let userVerb = "swim"
let userVerb = "swimming"
// let userVerb = "go"


// If the length of the string is at least 3 and the string doesn’t end with "ing", add ‘ing’ to the end of the string.
if (userVerb.length >= 3) {
    if (userVerb.slice(-3) === "ing") {
        userVerb = userVerb + "ly";
        console.log(userVerb);
    } else {
        userVerb = userVerb + "ing";
        console.log(userVerb);
    }
} else {
    console.log(userVerb);
}

