/*
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

const lengthOfLongestSubstring = (s) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let j = i;
    let temp = "";
    for (j; j < s.length; j++) {
      if (temp.includes(s[j])) {
        if (temp.length > result.length) {
          result = temp;
        }
        break;
      } else {
        temp = temp + s[j];
      }
    }
    if (j === s.length) {
      if (temp.length > result.length) result = temp;
      break;
    }
  }

  return result.length;
};

// lengthOfLongestSubstring("pwwkew") // 3
// lengthOfLongestSubstring("abcabcbb") // 3
// lengthOfLongestSubstring("bbbbb")
// lengthOfLongestSubstring("abcabcbb")
// lengthOfLongestSubstring(" ")
// lengthOfLongestSubstring("dvdef") // 4
// lengthOfLongestSubstring("jbpnbwwd") // 4
// lengthOfLongestSubstring("au") // 2
// lengthOfLongestSubstring("tmmzuxt") // 5
