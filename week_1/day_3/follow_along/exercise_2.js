// Write as comments the steps of the resolution of this piece of code
// Guess what will be the result before checking it
let a = 2 + 2; // Number 4

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break; // This case matches so I expect that output
    case 5:
        alert('Too large');
        break;
    default:
        alert("I don't know such values");
}