/*
Exercise 6 : Rudolf
Instructions:
*/
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
/*
1. Given the object above and using a for loop, console.log "my name is Rudolf the raindeer"
*/

let message = "";
for (let key in details) {
    message = `${message}${key} ${details[key]} `;
}
console.log(message)
