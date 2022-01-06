/* Insert a dash between two CONSECUTIVE odd numbers in a given string */

// Examples
// addDash(8865321398) ➞ "8865-321-3-98"

// addDash("1234567") ➞ "1234567"

function addDash(num) {
  let result = "";
  for (let i = 0; i < num.length; i++) {
    result = result.concat(num[i]);
    if (num[i] % 2 !== 0 && num[i + 1] && num[i + 1] % 2 !== 0)
      result = result.concat("-");
  }
  return result;
}

const input1 = "8865321398"; // input
const expect2 = "8865-321-3-98"; // output

const input2 = "1234567"; // input
const expect2 = "1234567";

expect1 === addDash(input1);
expect2 === addDash(input2);
