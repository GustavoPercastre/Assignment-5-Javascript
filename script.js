// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function range(start, end) 
{
    const rangeArray = [];
    for (let i = start; i <= end; i++) 
    {
      rangeArray.push(i);
    }
    return rangeArray;
  }
  
const results = range(1, 10);
  
console.log(results);

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < array1.length; i++) 
{
  sum += array1[i];
}
console.log(sum);

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

let array = [1, 2, 3, 4, 5];

function reverseArray(arr) 
{
  let outputArray = [];
  for (let i = arr.length - 1; i >= 0; i--) 
  {
    outputArray.push(arr[i]);
  }
  return outputArray;
}
console.log(reverseArray(array));

function reverseArrayInPlace(arr) 
{
  let midPoint = 0;
  if (arr.length % 2 == 0) 
  {
    midPoint = arr.length / 2 - 1;
  } else 
  {
    midPoint = arr.length / 2;
  }
  for (let i = 0; i <= midPoint; i++) 
  {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}
console.log(reverseArrayInPlace(array));