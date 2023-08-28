/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const myObj = {
  name: 'John',
  lastName: 'Doe',
  age: 25,
  friends: ['Mark', 'Lucie', 'Ana'],
};

let count = 0;
for (const entry of Object.entries(myObj)) {
  count++;
  console.log(`The #${count} key is : ${entry[0]} The #${count} value is : ${entry[1]}`);
};
console.log(`There are ${count} keys and ${count} values.`);
