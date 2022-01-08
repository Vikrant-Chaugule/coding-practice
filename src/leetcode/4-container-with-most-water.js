/*
Container With Most Water

You are given an integer array height of length n. There are n vertical 
lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container
contains the most water.

Return the maximum amount of water a container can store.
Notice that you may not slant the container.


Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
breadth = index(7) - index(8) = 8 - 1 = 7.
height = min(7, 8) = 7.
area = 7 * 7 = 49.
In this case, the max area of water the container can contain is 49.


Example 2:
Input: height = [1,1]
Output: 1
 

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

const maxArea = (height) => {
  let area = 0;
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    let b = j - i;
    let l = height[i] > height[j] ? height[j] : height[i];
    area = l * b;
    if (area > max) max = area;
    if (height[i] > height[j]) j--;
    else i++;
  }
  return max;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([1, 2]); // 1
