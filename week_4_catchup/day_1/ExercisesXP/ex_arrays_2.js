/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const users = {user1: 18273, user2: 92833, user3: 90315};

const usersArray = Object.entries(users);

const usersArrayModified = usersArray.map((value) => [value[0], value[1] * 2]);

console.log(usersArrayModified);
