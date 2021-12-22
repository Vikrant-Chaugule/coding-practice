/* 
An array is a type of data structure that stores elements of the same type in a contiguous block of memory.

Reverse an array of integers.

Example
A = [1,2,3]
Return [3,2,1]
*/

function reverseArray(a) {
  const length = a.length;
  if (length === 1) return a;
  const resultArray = [];
  for (let i = length - 1; i >= 0; i--) {
    resultArray.push(a[i]);
  }
  return resultArray;
}
