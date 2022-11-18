/*
Instructions
1. Write a JavaScript program that recreates the pattern below.
2. Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
3. Do this Daily Challenge by youself, without looking at the answers on the internet.
*
* *
* * *
* * * *
* * * * *
* * * * * *
*/

let numRows = 6;

console.log("\nWITHOUT USING A NESTED LOOP\n");

for (let i = 0; i < 6; i++) {
    console.log("* ".repeat(i + 1));
}

console.log("\nUSING A NESTED LOOP\n");

for (let i = 0; i < 6; i++) {
    str = "";
    for (let j = 0; j <= i; j++) {
        str = str + "* ";
    }
    console.log(str);
}




