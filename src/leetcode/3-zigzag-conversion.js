/*
Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a 
given number of rows like this: (you may want to display this pattern 
in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
 */

var convert = function (s, numRows) {
  let min = 0;
  let max = numRows - 1;
  let set = {};
  let count = min;
  let countDirection = 1;

  let result = Array(numRows);

  for (let i = 0; i < s.length; i++) {
    if (count <= max && countDirection) {
      if (!result[count]) result[count] = [s[i]];
      else result[count].push(s[i]);

      count++;
    } else {
      if (!result[count]) result[count] = [s[i]];
      else result[count].push(s[i]);

      count--;
    }
    if (count === max) countDirection = 0;
    if (count === min) countDirection = 1;
    if (numRows === 1) count = 0;
  }

  return result.flat().join("");
};
