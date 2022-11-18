/*
Instructions
const numbers =[5,0,9,1,7,4,2,6,3,8];
 
Using the .toString() method convert the array to a string.
Using the .join()method convert the array to a string. Try passing different values into the join.
Eg .join("+"), .join(" "), .join("")
Bonus : To do this Bonus look up how to work with nested for loops
Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
The output should be: [9,8,7,6,5,4,3,2,1,0]
Hint: The algorithm is called "Bubble Sort"
Use a temporary variable to swap values in the array.
Use 2 "nested" for loops (Nested means one inside the other).
Add comments and console.log the result for each step, this will help you understand.
Requirement: Don’t copy paste solutions from Google
*/

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.toString());
console.log(numbers.join());
console.log(numbers.join("+"));
console.log(numbers.join(" "));
console.log(numbers.join(""));

/*
https://www.mygreatlearning.com/blog/bubble-sort/#bubble-sort-pseudocode
Bubble Sort Pseudocode Descending
Bubble Sort Pseudocode in Descending order
Bubble Sort(arr, size)
        for i=0 to n-i-1
            for j=0 to n-i-1
                if arr[j]<arr[j+1]
                    Swap arr[j] and arr[j+1] 
*/
for (let i = 0; i < (numbers.length - 1); i++) {
    console.log(`i = ${i}`);
    for (let j = 0; j < (numbers.length - 1); j++) {
        if (numbers[j] < numbers[j + 1]) {
            tempVar = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = tempVar;
        }
        console.log(numbers);
    }
}