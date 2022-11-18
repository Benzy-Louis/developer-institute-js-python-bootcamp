/* eslint-disable max-len */
/*
Exercise 2 : Tips
Instructions
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

1. Create a function named calculateTip() that takes no parameter.

2. Inside the function, use prompt to ask John for the amount of the bill.

3. Here are the rules
- If the bill is less than $50, tip 20%.
- If the bill is between $50 and $200, tip 15%.
- If the bill is more than $200, tip 10%.

4. Console.log the tip amount and the final bill (bill + tip).

5. Call the calculateTip() function.
*/

function caculateTip() {
  const amountToBill = Number(prompt('What is the amount for the bill?'));
  let tip;
  if (amountToBill < 50) {
    // tip 20%
    tip = amountToBill*0.2;
  } else if ((amountToBill >= 50) && (amountToBill <= 200)) {
    // tip 15%
    tip = amountToBill*0.15;
  } else if ((amountToBill > 200)) {
    // tip 10%
    tip = amountToBill*0.1;
  }
  console.log(`The tip amount is ${tip}, and the final bill is ${amountToBill+tip}.`);
}

caculateTip();
