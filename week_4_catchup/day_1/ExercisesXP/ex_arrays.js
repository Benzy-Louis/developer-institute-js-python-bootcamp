
const object1 = {
  a: 'something',
  b: 42,
  c: false,
};


console.log(Object.entries(object1));
const arr = Object.entries(object1);
const newObj = Object.fromEntries(arr);

console.log(newObj);
