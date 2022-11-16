let fruit = 'Oranges';
// The code inside the case continues running until it reaches a break statement
// So one has to be careful, and not forget to put it.
switch (fruit) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log('Sorry, we are out of ' + fruit + '.');
}