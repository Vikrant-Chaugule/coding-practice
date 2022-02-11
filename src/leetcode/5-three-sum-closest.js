// Given an integer array nums of length n and an integer target,
// find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

/*
Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0

*/

// Bruteforce Approach
// function threeSumClosest(nums, target) {
//   let closestSum;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         const sum = nums[i] + nums[j] + nums[k];
//         if (!closestSum) closestSum = sum;
//         else {
//           let d1 = Math.abs(target - closestSum);
//           let d2 = Math.abs(target - sum);
//           closestSum = d1 > d2 ? sum : closestSum;
//         }

//         if (closestSum === target) break;
//       }
//       if (closestSum === target) break;
//     }
//     if (closestSum === target) break;
//   }

//   return closestSum;
// }

function threeSumClosest(arr, target) {
  const nums = arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let sum,
    i = 0;

  while (i < nums.length - 2) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let tempSum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(tempSum - target);

      if (diff === 0) return target;

      if (diff < min) {
        min = diff;
        sum = tempSum;
      }

      if (tempSum < target) left++;
      else right--;
    }
    i++;
  }
  return sum;
}

// threeSumClosest([1,1,1,0] , 100); // 3
// threeSumClosest([1,1,1,0] , -100); // 2
// threeSumClosest([0, 0, 0] , 1) // 0
// threeSumClosest( [0, 2, 1,-3] , 1) // 0
// threeSumClosest([1,1,-1,-1,3] , 3); // 3
// threeSumClosest( [-3,-2,-5,3,-1] , -1) // -1
// threeSumClosest([-1,0,1,2,-1,-4], 0) // 0
// threeSumClosest([-1,2,1,-4], 1) // 2
