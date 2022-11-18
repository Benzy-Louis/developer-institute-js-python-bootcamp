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

console.log(numbers.toString());
console.log(numbers.join());
console.log(numbers.join("+"));
console.log(numbers.join(" "));
console.log(numbers.join(""));

/*
https://www.mygreatlearning.com/blog/bubble-sort/#bubble-sort-pseudocode
Bubble Sort Pseudocode Descending
1. We are given with an input array which is supposed to be sorted in descending order
2. We start with the first element and i=0 index and check if the element present at i+1 is less then we swap the elements at index i and i+1.
3. If above is not the case, then no swapping will take place.
4. Now  " i " gets incremented and the above 2 steps happen again until the array is exhausted.
5. We will ignore the last index as it is already sorted.
6. Now the smallest element will be at the last index of the array.
7. Now we will again set i=0 and continue with the same steps that will eventually place second smallest at second last place in the array. Now the last 2 indexes of the array are sorted.

Bubble Sort Pseudocode in Descending order
Bubble Sort(arr, size)
        for i=0 to n-i-1
            for j=0 to n-i-2
                if arr[j]<arr[j+1]
                    Swap arr[j] and arr[j+1] 
*/
for (let i = 0; i < (numbers.length - i - 1); i++) {
    for (let j = 0; j < (numbers.length - i - 1); j++) {
        if (numbers[j] < numbers[j + 1]) {
            tempVar = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = tempVar;
        }
        console.log(numbers);
    }
}