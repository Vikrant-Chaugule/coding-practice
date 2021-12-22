/*
2D-Array-DS
Given a 6*6 2D Array
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass in A  is a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. 

Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6*6 .

Example 

hourglassSum([
  [-9, -9, -9, 1, 1, 1], 
  [ 0, -9,  0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [ 0,  0,  8, 6, 6, 0],
  [ 0,  0,  0,-2, 0, 0],
  [ 0,  0,  1, 2, 4, 0]
]);

The 16 hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18

OUTPUT : 28
//The highest hourglass sum is 28

*/

function hourglassSum(arr) {
  let result;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;

      for (let k = i; k < i + 1; k++) {
        for (let l = j; l < j + 3; l++) {
          sum += arr[k][l];
        }
      }

      sum += arr[i + 1][j + 1];

      for (let k = i + 2; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          sum += arr[k][l];
        }
      }
      if (result === undefined) result = sum;

      if (sum > result) result = sum;
    }
  }
  return result;
}
