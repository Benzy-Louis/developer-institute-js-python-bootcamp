/*
Exercise 2 : Zip Codes
Instruction
Harder exercise
Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

While working in a Post Office you must have the clients’ zip code in order to send them their letters.
Ask the client for their zip code and console.log "success" or "error" based on the following rules.
Zip codes consists of 5 numbers
Must only contain numbers
Must not contain any whitespace (spaces)
Must not be greater than 5 digits in length
*/

// Without regular expressions

let zipCode = prompt("Input a zip code please");
// let zipCode;
// zipCode = NaN;
// zipCode = "0  00";
// zipCode = "10451";
console.log("Without regex - Part I\n")
// We check the length of the string array and see if it's 5 
if (zipCode.length === 5) {
    // We check if each parsing the value to a number works if that is the case then it's a valid zip code else it isn't
    zipCode = Number(zipCode);
    // console.log(typeof (zipCode))
    console.log(zipCode);
    if (!(isNaN(zipCode))) {
        console.log("success");
    } else {
        console.log("error");
    }
} else {
    console.log("error");
}

console.log("\nUsing regex - Part II\n")
const regex5Digits = /\b\d{5}\b/;

if (regex5Digits.test(zipCode)) {
    console.log("success");
} else {
    console.log("error");
}