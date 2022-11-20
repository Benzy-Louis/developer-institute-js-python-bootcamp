/* eslint-disable max-len */
/*
Exercise 6 : Vacations Costs
Instructions
Let's create functions that calculate your vacation's costs:

1. Define a function called hotelCost().
- It should ask the user for the number of nights they would like to stay in the hotel.
- If the user doesn't answer or if the answer is not a number, ask again.
- The hotel costs $140 per night. The function should return the total price of the hotel.
*/
function hotelCost() {
  // Ask number of nights they would like to stay in hotel
  do {
    numberOfNights = prompt('How many nights would you like to stay at the hotel?');
  } while ((Number(numberOfNights) < 0) || isNaN(numberOfNights) || numberOfNights === '');
  return 140 * Number(numberOfNights);
}
// console.log(hotelCost());

/*
2. Define a function called planeRideCost().
- It should ask the user for their destination.
- If the user doesn't answer or if the answer is not a string, ask again.
- The function should return a different price depending on the location.
- "London": 183$
- "Paris" : 220$
- All other destination : 300$
*/
function planeRideCost() {
  let destination;
  do {
    destination = prompt('What is your destination?');
    // alert(`${destination} is of type ${typeof destination} and length: ${destination.length} isNaN result: ${isNaN(destination)}`);
  } while (destination.length == 0);

  switch (destination.toLowerCase()) {
    case 'london':
      return 183;
    case 'paris':
      return 220;
    default:
      console.log(destination);
      return 300;
  }
}
// alert(planeRideCost());

/*
3. Define a function called rentalCarCost().
- It should ask the user for the number of days they would like to rent the car.
- If the user doesn't answer or if the answer is not a number, ask again.
- Calculate the cost to rent the car. The car costs $40 everyday.
- If the user rents a car for more than 10 days, they get a 5% discount.
- The function should return the total price of the car rental.
*/

function rentalCarCost() {
  do {
    numberOfDays = prompt('For many days would you like to rent a car?');
  } while ((Number(numberOfDays) < 0) || isNaN(numberOfDays) || numberOfDays === '');
  if (numberOfDays > 10) {
    // discounted
    return (40 * numberOfDays) * 0.95;
  } else {
    return 40 * numberOfDays;
  }
}
// alert(rentalCarCost())

/*
4. Define a function called totalVacationCost() that returns the total cost of the user's vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

5. Call the function totalVacationCost()

6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/

function totalVacationCost() {
  const x = rentalCarCost();
  const y = hotelCost();
  const z = planeRideCost();

  alert(`The car cost: ${x}, the hotel cost: ${y}, the plane tickets cost: ${z}.`);
}

totalVacationCost();
